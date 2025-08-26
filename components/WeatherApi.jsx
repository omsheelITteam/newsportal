"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";

const WeatherAPI = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true); 

    const fetchLocationAndWeather = async () => {
      try {
        const locationRes = await axios.get("https://ipapi.co/json/");
        const cityName = locationRes.data.city;
        setCity(cityName);

        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`
        );

        setWeather({
          temp: weatherRes.data.main.temp,
          description: weatherRes.data.weather[0].description,
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchLocationAndWeather();
  }, []);

  if (!mounted) return null; // ⛔ don't render anything on server

  return (
    <div>
      {weather ? (
        <p className="flex">
          <span className="font-semibold text-gray-500">{city}</span>&nbsp;
          <span className="font-bold text-gray-500 flex gap-2 items-center">
            <TiWeatherCloudy className="font-bold text-black text-lg" />
            {Math.floor(weather.temp)}°C
          </span>
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherAPI;
