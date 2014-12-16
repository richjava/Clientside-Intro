//http://www.html5rocks.com/en/tutorials/workers/basics/
self.addEventListener('message', function(e) {
  postMessage(e.data+" from the worker!");
}, false);

