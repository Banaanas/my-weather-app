// Function Factory - SearchWeather
import axios from "axios";

// Set the API response for current days and forecast days weather
const SearchWeather = (lat, long) => {
  const APIKey = "20fafa774e77eb34d1bb477bcb320fe6";
  async function getWeather() {
    try {
      const response = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
         exclude=current,hourly,minutely,daily&appid=${APIKey}`
      );
      this.responseAPI = await response;
      return this.responseAPI;
    } catch (error) {
      return "you made a mistake";
    }
  }
  return {
    getWeather,
  };
};

export default SearchWeather;
