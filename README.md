# ajax.js

> Simple front end cross-browser JS library for sending AJAX requests


## Simple Usage

```javascript
ajax(function(err, data) {
  if (!err) {
    alert(data);
  }
  else {
    console.log("AJAX error: "+err);
  }
}, "http://enable-cors.org", "GET");
```


### API

#### ajax()
* Callback
 * Error
 * Response data
 * Response data
 * Response status code
 * Full XMLHttpRequest / ActiveXObject object
* URL
* Method ("GET", "POST", etc.) (Defaults to "GET" if not present.)
* Data (For use in POST requests, generally.)
