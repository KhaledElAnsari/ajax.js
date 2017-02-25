/*
Copyright (c) 2016 Ethan Davis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var ajax = function(cb, url, method, data) {
	try {
		var request = new(XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");
		if (method) {
			request.open(method, url, true);
		}
		else {
			request.open("GET", url, true);
		}
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					cb(false, request.responseText, request.status, request);
				}
				else {
					cb("Response status code: "+request.status, request.responseText, request.status, request);
				}
			}
		}
		if (data) {
			request.send(data.toString());
		}
		else {
			request.send();
		}
	}
	catch (err) {
		cb(err, "", false, request);
	}
};
