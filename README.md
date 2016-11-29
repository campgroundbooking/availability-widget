# CampgroundBooking Availability Widget

Widget to check the availability of a campsite/campground through CampgroundBooking.com.

## Installation

```sh
npm i @campgroundbooking/availability-widget
```

## Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CampgroundBooking availability</title>
  <script src="campgroundbooking-widget.js"></script>
</head>
<body>
  <campgroundbooking-widget theme="blue"></campgroundbooking-widget>
</body>
</html>
```

### Options

* _theme_ - A theme  to load (e.g. green, red, blue, gold)
* _client-id_ - Your campground booking client id
* _campground_ - The id of the campground to check
* _site_ (optional) - The id of a site to check, if no site given checks the whole campground
* _server_ (optional) - The campground booking server to connect to (default https://app.campgorundbooking.com)


## License

MIT
