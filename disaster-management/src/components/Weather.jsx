import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (coordinates) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast`,
            {
              params: {
                lat: coordinates.latitude,
                lon: coordinates.longitude,
                appid: '64b66d919029c1a2dad8f507c263c5fe',
                units: 'metric'
              }
            }
          );

          console.log(response);
          setWeatherData(response.data);
        } catch (err) {
          // Log the error to the console for debugging
          console.error('Error fetching weather data:', err.response ? err.response.data : err.message);
          setError('Failed to fetch weather data');
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [coordinates]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;

  // For the forecast endpoint, you may want to show the data differently.
  // Here is a basic example of displaying the first entry from the forecast data.
  const forecast = weatherData?.list[0];

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '8px' }}>
      <h3>Weather Forecast</h3>
      {forecast ? (
        <div>
          <p>Temperature: {forecast.main.temp}°C</p>
          <p>Condition: {forecast.weather[0].description}</p>
          <p>Humidity: {forecast.main.humidity}%</p>
          <p>Wind Speed: {forecast.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No forecast data available</p>
      )}
    </div>
  );
};

export default Weather;
