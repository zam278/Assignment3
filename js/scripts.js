// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-74.428253, 40.231315],
  zoom: 7.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Hi Web Mapping 2019 Class!');

//var marker: This adds only one marker.  If you want to add more than one, you can repeat all of this code with a different LngLat
//or you will need to make a loop that executes this code with different variables
var marker = new mapboxgl.Marker()
  .setLngLat([-74.005420,40.789654])
  .setPopup(popup)
  .addTo(map);

  studentFavoriteSpots.forEach(function(studentData) {

    new mapboxgl.Marker({

      })
  .setLngLat([studentData.lng, studentData.lat])
  .setPopup(new mapboxgl.Popup({ offset: 40 })
    .setText(`${studentData.name} says their favorite Spot is ${studentData.studentFavoriteSpots}`))
  .addTo(map);
})
