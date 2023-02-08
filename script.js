require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {
  var map = new Map({
    basemap: "dark-gray-vector"
  });
  const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [-119.417, 36.778],
    zoom: 5
  });
  var featureLayer = new FeatureLayer({
    url:
      "https://services1.arcgis.com/jUJYIo9tSA7EHvfZ/arcgis/rest/services/California_Fire_Perimeters/FeatureServer/0"
  });
  map.add(featureLayer);

  var popupfacilities = {
    title: "Wildland Fire Protection Facility",
    content: "<b>Name:</b> {Name}<br><b>Type:</b> {Type}<br><b>City:</b> {City}"
  };

  var featureLayer2 = new FeatureLayer({
    url:
      "https://egis.fire.ca.gov/arcgis/rest/services/FRAP/Facilities/FeatureServer/0",
    outFields: ["Name", "Type", "City"],
    popupTemplate: popupfacilities
  });
  map.add(featureLayer2);
});