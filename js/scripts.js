// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';


var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.98, 40.70],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Hi Web Mapping 2019 Class!');

var marker = new mapboxgl.Marker()
  .setLngLat([-73.969145,40.669116])
  .setPopup(popup)
  .addTo(map);


  //to create a loop for the marker; every for loop it has to start and end with {}
filmLocation.forEach(function(movieData) {

  var thisStudentsColor = 'steelblue';
  if (movieData.type === 'Action') thisFilmColor = 'orange';
  if (movieData.type === 'Comedy') thisFilmColor = 'plum';
  if (movieData.type === 'Crime') thisFilmColor = 'springgreen';
  if (movieData.type === 'Drama') thisFilmColor = 'dodgerblue';
  if (movieData.type === 'Fantasy') thisFilmColor = 'pink';
  if (movieData.type === 'Romance') thisFilmColor = 'seagreen';


  // to add a marker for each feature
  new mapboxgl.Marker({
    color: thisStudentsColor,
  })
    .setLngLat([filmData.lon, filmData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setHTML('<h3>' + marker.properties.description +'</h3><p>' + "Year" + "Rating" +
        marker.properties.rate + " out of 10" + '</p><p>' +
        marker.properties.location + '</p>' ))

//add legend to the map

var FilmLookUp = (code) => {
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
    <div class="legend-color-box" style="background-color:${filmInfo.color};"></div>
    ${filmInfo.description}
  </div>
`)
}

legend.addTo(map);
})
