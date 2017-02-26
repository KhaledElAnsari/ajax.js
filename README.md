# ajax.js

> Ultra-simple front-end cross-browser JS library for sending AJAX requests

## Usage Demos

### Sending a basic GET request

```javascript
ajax({
	"url": "http://ony.io"
}, function(err, body, res) {
	if (!err) {
		console.log(body);
	}
});
```

### Sending POST request with data

```javascript
ajax({
	"url": "https://ony.io",
	"method": "POST",
	"data": JSON.stringify({
		"hey": "Hey there!"
	})
}, function(err, body, res) {
	if (!err) {
		console.log(body);
	}
});
```

## API

#### (options, callback)

* `options` **required** - _Object_ - object containing request options
	* `url` **required** - _String_ - URL to send request to
	* `method` - _String_ - Default: `'GET'` - request method
	* `headers` - _Object_ - custom request headers
	* `data` - _String_ - data to send in request
* `callback` **required** - function(err, body, response) {} - callback method
	* `err` - __String__ / __null__ - null if no errors occurred while making request
	* `body` - __String__ - response content
	* `response` - AJAX request object with response content. See [XMLHttpRequest on MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

## License (MIT)

Copyright 2017 Ethan Davis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.