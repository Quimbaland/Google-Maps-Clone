"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoicXVpbWJvIiwiYSI6ImNsdGFqanYycDA1dWcyam03OThmaHkzcmQifQ.Eu9pyUukF1VyglHUiHuLzw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true} );

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-2.24, 53.48]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoicXVpbWJvIiwiYSI6ImNsdGFqanYycDA1dWcyam03OThmaHkzcmQifQ.Eu9pyUukF1VyglHUiHuLzw',
      });
      
      map.addControl(directions, 'top-left');
}


