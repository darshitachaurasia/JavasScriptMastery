
// Function to create a counter object
function getWeather(city) {
  const weatherData = {
    "New York": {
      temperature: 25,
      humidity: 60,
      condition: "Sunny"
    },
    "London": {
      temperature: 15,
      humidity: 80,
      condition: "Cloudy"
    },
    "Paris": {
      temperature: 18,
      humidity: 70,
      condition: "Rainy"
    },
    "Tokyo": {
      temperature: 22,
      humidity: 65,
      condition: "Clear"
    }
  };
  // Check if the city exists in the predefined data
  if (weatherData[city]) {
    const data = weatherData[city];
    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${data.temperature}°C`);
    console.log(`Humidity: ${data.humidity}%`);
    console.log(`Condition: ${data.condition}`);
  } else {
    console.log("Sorry, weather data for this city is not available.");
  }
}

// Example usage
const city = prompt("Enter a city name:");  // Prompt the user to enter a city
getWeather(city);  // Call the function to display the weather
