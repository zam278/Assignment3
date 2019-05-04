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
.addTo(map);

  //to create a loop for the marker; every for loop it has to start and end with {}
movie.forEach(function(movieData) {

    var thisMovieColor = 'steelblue';
    if (movieData.movietype === 'Action') thisMovieColor = 'orange';
    if (movieData.movietype === 'Comedy') thisMovieColor = 'plum';
    if (movieData.movietype === 'Crime') thisMovieColor = 'springgreen';
    if (movieData.movietype === 'Drama') thisMovieColor = 'dodgerblue';
    if (movieData.movietype === 'Fantacy') thisMovieColor = 'Pink';
    if (movieData.movietype === 'Romance') thisMovieColor = 'seagreen';

// to add a marker for each feature
new mapboxgl.Marker({
    color: thisMovieColors,
  })
  .setLngLat([movieDate.lon, movieDate.lat])
  .setPopup(new mapboxgl.Popup({ offset: 40 })
    .setHTML('<h3>' + marker.properties.movie_description +'</h3><p>' + "Year" + "Rating" +
        marker.properties.movie_rating + " out of 10" + '</p><p>' +
        marker.properties.movie.location + '</p>' ))
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

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend');
    movie = ['Action','Comedy','Crime','Drama','Fantasy','Romance'];

  // loop through the categories values and generate a label with a circle for each value

  for (var i = 0; i < films.length; i++) {

    div.innerHTML +=   '<i class="circle" style="background:' + getColor(films[i]) + '"></i> ' + (films[i] ? films[i] + '<br>' : '+');
  }
	return div;

};
legend.addTo(map);
