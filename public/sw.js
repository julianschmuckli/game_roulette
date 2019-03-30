var base_url = self.location.origin;
var offline_files = [
    "index.html",
    "manifest.json"
];

self.addEventListener('install', function (event) {
    console.log('Install!');
});
self.addEventListener("activate", event => {
    console.log('Activate!');
});
self.addEventListener('fetch', function (event) {
    console.log('Fetch!', event.request);

    var request = event.request;

    //Cache files
    if(navigator.onLine){
      var offlineRequest = new Request(request.url.replace(base_url + "/", "").trim());
      fetch(offlineRequest).then(function (response) {
          return caches.open('offline').then(function (cache) {
              console.log('[oninstall] Cached offline page', response.url);
              return cache.put(offlineRequest, response);
          });
      });
    }

    if (request.method === 'GET') {

        event.respondWith(
            fetch(request).catch(function (error) {

                console.log(
                    '[onfetch] Failed. Serving cached offline fallback ' +
                    error
                );
                return caches.open('offline').then(function (cache) {
                    var cache_file = (request.url).replace(base_url + "/", "").trim();
                    console.log("Loading " + cache_file);

                    if (cache_file == "") {
                        //cache_file = offline_files[0];
                    }

                    return cache.match(cache_file);
                });
            })
        );
    }
});
