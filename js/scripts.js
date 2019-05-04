// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';


var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  Center =[40.755580,-73.960819];
  zoom= 12;
});

<--!map style!-->
{
  "id": "water",
  "type": "fill",
  "source": "openmaptiles",
  "source-layer": "water",
  "filter": [
    "==",
    "$type",
    "Polygon"
  ],
  "layout": {
    "visibility": "visible"
  },
  "paint": {
    "fill-color": "rgba(167, 211, 226, 1)",
    "fill-antialias": true
  }
}

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//we create variables {var} to uphold any equation we want to re-use
var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Hi Web Mapping 2019 Class!');

//var marker: This adds only one marker.  If you want to add more than one, you can repeat all of this code with a different LngLat
//or you will need to make a loop that executes this code with different variables
var marker = new mapboxgl.Marker()
  .setLngLat([-74.005420,40.789654])
  .setPopup(popup)
  .addTo(map);
  //to create a loop for the marker; every for loop it has to start and end with {}
  movie.forEach(function(movieData) {

    var thisMovieColor = 'steelblue';
    if (movieData.movietype === 'Action') thisMovieColor = 'orange';
    if (movieData.movietype === 'Comedy') thisMovieColor = 'plum';
    if (movieData.movietype === 'Crime') thisMovieColor = 'springgreen';
    if (movieData.movietype === 'Drama') thisMovieColor = 'dodgerblue';
    if (movieData.movietype === 'Fantacy') thisMovieColor = 'yellow';
    if (movieData.movietype === 'Romance') thisMovieColor = 'seagreen';

// we add this to create a marker for every name, if we dont add this it will just loop through it in Atom.. if something>>do something
    new mapboxgl.Marker({

      })
  .setLngLat([studentData.lng, studentData.lat])
  // add Popup
  .setPopup(new mapboxgl.Popup({ offset: 40 })
  .setHTML('<h3>' + marker.properties.FilmLocation +'</h3><p>' + "Location"
)
    .setText(`${studentData.name} says their favorite Spot is ${studentData.favoritspot}`))
  .addTo(map);
})
