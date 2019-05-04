// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  Center =[-73.966999,40.7539584];
  zoom= 12;
});

//map style
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
      //make a marker for each feature and add to the map
      new mapboxgl.Marker()
        .setLngLat([movieData.lng, movieData.lat])
        .addTo(map);

          // add Popup
  .setPopup(new mapboxgl.Popup({ offset: 40 })
  .setHTML('<h3>' + marker.properties.movie_description +'</h3><p>' + "Year" + "Rating" +
        marker.properties.movie_rating + " out of 10" + '</p><p>' +
        marker.properties.movie.location + '</p>' ))
  .addTo(map);
});
