import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Weather.css';  // Import the CSS file

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

  const forecast = weatherData?.list[0];

  return (
    <div className="weather-box">
      <h3 className="weather-title">Weather Forecast</h3>
      {forecast ? (
        <div className="weather-details">
          <p className="weather-text">Temperature: {forecast.main.temp}°C</p>
          <p className="weather-text">Condition: {forecast.weather[0].description}</p>
          <p className="weather-text">Humidity: {forecast.main.humidity}%</p>
          <p className="weather-text">Wind Speed: {forecast.wind.speed} m/s</p>
        </div>
      ) : (
        <p className="weather-text">No forecast data available</p>
      )}
    </div>
  );
};

export default Weather;
