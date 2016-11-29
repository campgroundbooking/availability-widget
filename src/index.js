import $ from 'jquery';
import webcomponents from 'webcomponents.js/webcomponents-lite.js';

import { calendar } from './calendar';

import moment from 'moment';

import template from './template.html';
import style from './sass/index.scss';

class CampgroundBookingWidget extends HTMLElement {
  createdCallback() {
    this.output = {};
    this.createShadowRoot().innerHTML = `<style>${style}</style>` + template;
    if(!this.calendar){
      this.calendar = calendar(this.shadowRoot, (start, end) => {
        this.output.start = moment(start).toISOString();
        this.output.end = moment(end).toISOString();
      });
    }

    this.$container = this.shadowRoot.querySelector('.container');
    this.$server = this.getAttribute('server') || 'https://api.campgroundbooking.com';
    this.$base = this.$server + '/api/v1';
    this.$clientId = this.getAttribute('client-id');
    this.$campground = this.getAttribute('campground');
    this.$site = this.getAttribute('site');

    this.updateTheme(this.getAttribute('theme'));

  };
  // Fires when an instance was inserted into the document.
  attachedCallback() {
    $('.actions button#save', this.shadowRoot).click(event => {
      self = this;
      event.preventDefault();
      $('#mainForm', this.shadowRoot).find(':input').each(function() {
        self.output[$(this).attr('id')] = $(this).val();
      });
      console.log(this.output);
    });
  };
  // Fires when an attribute was added, removed, or updated.
  attributeChangedCallback(attrName, oldVal, newVal) {};

  updateTheme(theme) {
    var val;
    if(['green', 'red', 'blue', 'gold'].indexOf(theme) > -1) {
      val = theme;
    }
    this.theme = val;
    this.$container.className = `container theme-${val}`;
  };
}
document.registerElement('campgroundbooking-widget', CampgroundBookingWidget);
