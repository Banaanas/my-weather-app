import axios from "axios";

/* - When City Search is used, we use the input's name as city's name
   - So this controlNameSearch Function is only called after the
     Geolocation Process (if accepted). It uses the Google Map reverse
     Geocoding API to get the city name from the latitude and longitude
     of the User's Browser. */

const SearchLocationName = (latitude, longitude) => {
  const APIKey = "AIzaSyDDqPREyWFGfufBZU1IaQgf8s9huhGQD7A";
  async function getName() {
    try {
      const response = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIKey}`
      );
      this.responseAPI = await response;
      return this.responseAPI;
    } catch (error) {
      const problemAPI = Error("Problem with Reverse Geocoding API.");
      // eslint-disable-next-line no-console
      console.log(problemAPI);
      return Error;
    }
  }

  return {
    getName,
  };
};

export default SearchLocationName;
