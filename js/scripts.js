// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';


var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.966999,40.739584],
  zoom: 11.5,
});

var popup = new mapboxgl.Popup({ offset: 40 })
var marker = new mapboxgl.Marker()
  .setPopup(popup)

  //to create a loop for the marker; every for loop it has to start and end with {}
  movie.forEach(function(movieData) {

    var thisMovieColor = 'steelblue';
    if (movieData.type === 'Action') thisMovieColor = 'orange';
    if (movieData.type === 'Comedy') thisMovieColor = 'plum';
    if (movieData.type === 'Crime') thisMovieColor = 'springgreen';
    if (movieData.type === 'Drama') thisMovieColor = 'dodgerblue';
    if (movieData.type === 'Fantacy') thisMovieColor = 'Pink';
    if (movieData.type === 'Romance') thisMovieColor = 'seagreen';

// to add a marker for each feature
new mapboxgl.Marker({
  color: thisMovieColor,
})
  .setLngLat([movieData.lon, movieData.lat])
  .setPopup(new mapboxgl.Popup({ offset: 40 })
    .setHTML('<h3>' + marker.properties.movie_description +'</h3><p>' + "Year" + "Rating" +
        marker.properties.movie_rate + " out of 10" + '</p><p>' +
        marker.properties.movie_location + '</p>' ))
  .addTo(map);
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//add legend to the map

var MovieLookUp = (code) => {
  switch (code) {
    case 1:
      return {
        color: 'orange',
        description: 'Action',
      };
      case 2:
        return {
          color: 'plum',
          description: 'Comedy',
        };
      case 3:
        return {
          color: 'springgreen',
          description: 'Crime',
        };
      case 4:
        return {
          color: 'dodgerblue',
          description: 'Drama',
        };
      case 5:
        return {
          color: 'Pink',
          description: 'Fantasy',
        };
    case 5:
      return {
        color: 'seagreen',
        description: 'Romance',
      };
    }
   };


var legend = L.control({position: 'upperleft'});

  // use jquery to programmatically create a Legend
// for numbers 1 - 5, get the movie color and description
for (var i=1; i<5; i++) {

  // this is a simple jQuery template, it will append a div to the legend with the color and description
$('.legend').append(`
  <div>
    <div class="legend-color-box" style="background-color:${movieInfo.color};"></div>
    ${movieInfo.description}
  </div>
`)
}

legend.addTo(map);
