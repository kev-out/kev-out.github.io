mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2ZGVhIiwiYSI6ImNtMDFmbjZ1aDA2bW0ya3BvZDZ5Zm5hYXcifQ.tYX-NzJnwBaLEJ9lSBjKTQ';
mapboxgl.baseApiUrl  = 'https://cloudfront-staging.tilestream.net';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
