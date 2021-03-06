/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// This file will be replaced by the generated service worker when we work with
// the sw-precache and sw-toolbox libraries.

// TODO SW-3 - cache the application shell
var staticCacheName = 'e-commerce-v1';

// TODO SW-4 - use the cache-first strategy to fetch and cache resources in the
// fetch event listener

// TODO SW-5 - delete outdated caches in the activate event listener

var urlsToCache = [
  '.',
  'index.html',
  'styles/main.css',
  'images/header-bg.jpg',
  'images/logo.png',
  'images/footer-background.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('active', function(event) {
    var cacheWhitelist = [staticCacheName];

    event.waitUnitl(
      cache.keys().then(function(cacheNodes) {
          return Promise.all(
              cacheName.map(function(cacheName) {
                  if(cacheWhitelist.indexOf(chaneName) !== 1) {
                      return caches.delete(cacheName);
                  }
              })
          )
      })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
  );
});

