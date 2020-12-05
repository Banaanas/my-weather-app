// Import Packages
import "core-js";
import places from "places.js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.css";
import "./styles/normalize.css";
import "./styles/weather-icons.css";

// Import Images
import sunIconSrc from "./images/sun.svg";
import rainbowIconSrc from "./images/rainbow.svg";

// Imports from Modules
import elements from "./js/DOM-elements";
import { removeCurrentWeather, removeForecastDays } from "./js/view";
import controlSearch from "./js/control-search";
import getGeolocation from "./js/location";

// Set Images src
const permanentIcons = document.querySelectorAll(".permanent-icons");
permanentIcons[0].src = sunIconSrc;
permanentIcons[1].src = rainbowIconSrc;

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
