// Import Packages
import "core-js";
import places from "places.js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";
import "./styles/weather-icons.css";

// Imports from Modules
import elements from "./js/DOM-elements";
import { removeCurrentWeather, removeForecastDays } from "./js/view";
import controlSearch from "./js/control-search";
import getGeolocation from "./js/location";

// Get Paris Weather - Default Weather
// Then ask User for Geolocation
const init = async () => {
  await controlSearch(48.8546, 2.333333, "Paris");
  await getGeolocation();
};
init();

// Set the city autocomplete function (places.js)
const placesAutocomplete = places({
  appId: "pl143F2FO84L",
  apiKey: "a3a6cfc42136a849c8ccde749aa1ce99",
  container: elements.searchInput,
  type: "city",
});

// Display weather of the chosen location
placesAutocomplete.on("change", (event) => {
  const locationName = event.suggestion.name;
  const latitude = event.suggestion.latlng.lat;
  const longitude = event.suggestion.latlng.lng;
  removeCurrentWeather();
  removeForecastDays();
  controlSearch(latitude, longitude, locationName);
});

Error("you made a mistake");
