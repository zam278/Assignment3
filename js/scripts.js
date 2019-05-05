// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

// creaate the map
var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.98, 40.70],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Iconic Film Location!');

var marker = new mapboxgl.Marker()
  .setLngLat([-73.969145,40.669116])
  .setPopup(popup)
  .addTo(map);

  //add legend to the map

  var FilmLookup = (code) => {
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
      case 6:
        return {
          color: 'seagreen',
          description: 'Romance',
          };

      }
    };
  // use jquery to programmatically create a Legend
  // for numbers 1 - 5, get the movie color and description
for (var i=1; i<7; i++) {
  const filmInfo = FilmLookup(i);

  //to create a loop for the marker; every for loop it has to start and end with {}
filmSpots.forEach(function(filmData) {

  var thisFilmColor = 'steelblue';
  if (filmData.type === 'Action') thisFilmColor = 'orange';
  if (filmData.type === 'Comedy') thisFilmColor = 'plum';
  if (filmData.type === 'Crime') thisFilmColor = 'springgreen';
  if (filmData.type === 'Drama') thisFilmColor = 'dodgerblue';
  if (filmData.type === 'Fantasy') thisFilmColor = 'pink';
  if (filmData.type === 'Romance') thisFilmColor = 'seagreen';


  // to add a marker for each feature
  new mapboxgl.Marker({
    color: thisFilmColor,
  })
    .setLngLat([filmData.lon, filmData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setHTML('<h4>' + filmData.description +'</h4><p>' + "Year: " + filmData.year + '</p><p>'+ "Rating: " +
        filmData.rate + " out of 10" + '</p><p>' + "location: " +
        filmData.location + '</p>' ))
    .addTo(map);


})


    // this is a simple jQuery template, it will append a div to the legend with the color and description
  $('.legend').append(`
    <div>
      <div class="legend-color-box" style="background-color:${filmInfo.color};"></div>
      ${filmInfo.description}
    </div>
  `)
}
