# ajax.js
Simple front end cross-browser JS library for sending AJAX requests asynchronously.

## Simple Usage
```javascript
ajax(function(err, data) {
  if (!errr) {
    alert(data);
  }
  else {
    console.log("AJAX error: "+err);
  }
}, "http://enable-cors.org", "GET");
```

### All Parameters

#### In ajax() method:
* Callback function
* URL
* Method ("GET", "POST", etc.) (Defaults to "GET" if not present.)
* Data (For use in POST requests, generally.)

#### In callback:
* Error (String if error, false bool if no error)
* Response data
* Response status code
* Full XMLHttpRequest / ActiveXObject object
