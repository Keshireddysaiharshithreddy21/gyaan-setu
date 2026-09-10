// ======================================================
// GYAAN SETU
// SERVICE WORKER
// ======================================================

const CACHE_NAME =
  "gyaan-setu-v16";


const APP_FILES = [

  "./",

  "./index.html",

  "./style.css",

  "./app.js",

  "./data.js",

  "./manifest.json",

  "./images/logo.png",

  "./images/icon-192.png",

  "./images/icon-512.png",


  // LESSON IMAGES

  "./images/lessons/body-parts.png",

  "./images/lessons/plants.png",

  "./images/lessons/animals.png",

  "./images/lessons/water.png",

  "./images/lessons/weather.png",

  "./images/lessons/living-things.png",

  "./images/lessons/healthy-food.png",

  "./images/lessons/clean-home.png",

  "./images/lessons/environment.png",

  "./images/lessons/trees.png",

  "./images/lessons/animal-habitat.png",

  "./images/lessons/agriculture.png",

  "./images/lessons/clean-environment.png",

  "./images/lessons/forest.png",

  "./images/lessons/natural-resources.png",

  "./images/lessons/water-conservation.png",

  "./images/lessons/health.png",

  "./images/lessons/recycling.png"

];


// ======================================================
// INSTALL
// ======================================================

self.addEventListener(
  "install",
  event => {

    event.waitUntil(

      caches
        .open(
          CACHE_NAME
        )
        .then(
          cache => {

            return cache.addAll(
              APP_FILES
            );

          }
        )

    );


    self.skipWaiting();

  }
);


// ======================================================
// ACTIVATE
// ======================================================

self.addEventListener(
  "activate",
  event => {

    event.waitUntil(

      caches
        .keys()
        .then(
          keys => {

            return Promise.all(

              keys.map(
                key => {

                  if (
                    key !==
                    CACHE_NAME
                  ) {

                    return caches.delete(
                      key
                    );

                  }

                }
              )

            );

          }
        )

    );


    self.clients.claim();

  }
);


// ======================================================
// FETCH
// ======================================================

self.addEventListener(
  "fetch",
  event => {

    if (
      event.request.method !==
      "GET"
    ) {

      return;

    }


    event.respondWith(

      caches
        .match(
          event.request
        )
        .then(
          cachedResponse => {

            if (
              cachedResponse
            ) {

              return cachedResponse;

            }


            return fetch(
              event.request
            )
            .then(
              networkResponse => {

                if (
                  !networkResponse ||
                  networkResponse.status !== 200
                ) {

                  return networkResponse;

                }


                const responseClone =
                  networkResponse.clone();


                caches
                  .open(
                    CACHE_NAME
                  )
                  .then(
                    cache => {

                      cache.put(
                        event.request,
                        responseClone
                      );

                    }
                  );


                return networkResponse;

              }
            )
            .catch(
              () => {

                if (
                  event.request.mode ===
                  "navigate"
                ) {

                  return caches.match(
                    "./index.html"
                  );

                }

              }
            );

          }
        )

    );

  }
);