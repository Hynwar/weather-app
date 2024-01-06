import { useWeather } from "../context/WeatherContext";
import styles from "./DataPanel.module.css";
import Loader from "./Loader";

function DataPanel() {
	const { weatherData, isLoading } = useWeather();
	console.log(weatherData);

	if (isLoading)
		return (
			<div className={styles.loader}>
				<Loader />
			</div>
		);

	if (weatherData.length === 0)
		return (
			<div className={styles.dataPanel}>
				<h2>Search for City</h2>
			</div>
		);

	return (
		<div className={styles.dataPanel}>
			<span>{Math.round(weatherData.main.temp)}°</span>
			<div className={styles.text}>
				<h2>{weatherData.name}</h2>
				<p>06:09 - Sun 6 Oct, 2024</p>
			</div>
			<div className={styles.icon}>
				<img src='images\weather.png' alt='weather' />
				<p>Partly Cloudy</p>
			</div>
		</div>
	);
}

export default DataPanel;
