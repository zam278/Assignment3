// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';


var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.966999,40.739584],
  zoom: 11.5,
});

  //to create a loop for the marker; every for loop it has to start and end with {}
  movie.forEach(function(movieData) {

    var thisMovieColor = 'steelblue';
    if (movieData.movietype === 'Action') thisMovieColor = 'orange';
    if (movieData.movietype === 'Comedy') thisMovieColor = 'plum';
    if (movieData.movietype === 'Crime') thisMovieColor = 'springgreen';
    if (movieData.movietype === 'Drama') thisMovieColor = 'dodgerblue';
    if (movieData.movietype === 'Fantacy') thisMovieColor = 'yellow';
    if (movieData.movietype === 'Romance') thisMovieColor = 'seagreen';

// to add a marker for each feature
var new mapboxgl.Marker (el)
  .setLngLat([movieDate.lon, movieDate.lat])
  .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setHTML('<h3>' + marker.properties.movie_description +'</h3><p>' + "Year" + "Rating" +
        marker.properties.movie_rating + " out of 10" + '</p><p>' +
        marker.properties.movie.location + '</p>' ))
  .addTo(map);
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
