import $ from 'jquery';
import moment from 'moment';
import Calendar from 'BaremetricsCalendar/public/js/Calendar'

export function calendar(root, setrange) {
  if(!root){
    root = document;
  }
  return new Calendar({
    element: $('.daterange', root),
    earliest_date: moment().toDate(),
    start_date: moment(),
    end_date: moment().add(1, 'd'),
    presets: false,
    callback: function() {
      let start = moment(this.start_date).format('ll');
      let end = moment(this.end_date).format('ll');

      if(setrange) {
        return setrange(start, end);
      }
    }
  });
}
