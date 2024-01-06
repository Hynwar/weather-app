import { createContext, useContext, useState } from "react";

const API_KEY = "35bb07a9b2efb3bf4949dab30d4eda1a";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
	const [weatherData, setWeatherData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function getWeatherData(lat, lon) {
		try {
			const res = await fetch(
				`${URL}?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
			);
			const result = await res.json();
			setWeatherData(result);
		} catch (error) {
			throw new Error(error);
		}
	}

	return (
		<WeatherContext.Provider
			value={{
				weatherData,
				isLoading,
				getWeatherData,
			}}>
			{children}
		</WeatherContext.Provider>
	);
}

function useWeather() {
	const contextVal = useContext(WeatherContext);

	if (contextVal === undefined)
		throw new Error("Invalid use of WeatherContext");

	return contextVal;
}

export { WeatherProvider, useWeather };
