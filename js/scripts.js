# save seperate json file


mapboxgl.accessToken = 'pk.eyJ1IjoiemFtMjc4IiwiYSI6ImNqdWQ5YWpneDBzbGQ0ZW5xOGtzcDJ0OGcifQ.PqU5et-zFUgXyhIeGuueqg';
var map = new mapboxgl.Map({

  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-74.01, 40.78],
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

studentPizzaShops.forEach(function(studentData) {

  var thisStudentsColor = 'steelblue';
  if (studentData.nyuprogram === 'wagner') thisStudentsColor = 'orange';
  if (studentData.nyuprogram === 'cusp') thisStudentsColor = 'purple';
  if (studentData.nyuprogram === 'adjunct') thisStudentsColor = 'green';
  if (studentData.nyuprogram === 'global liberal studies') thisStudentsColor = 'yellow';

  new mapboxgl.Marker({
    color: thisStudentsColor,
  })
    .setLngLat([studentData.lng, studentData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${studentData.name} says their favorite pizza shop is ${studentData.favoritepizzashop}`))
    .addTo(map);
})