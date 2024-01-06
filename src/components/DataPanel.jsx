import { useWeather } from "../context/WeatherContext";
import styles from "./DataPanel.module.css";
import Loader from "./Loader";

function DataPanel() {
	const { weatherData, isLoading } = useWeather();

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

	const timestamp = weatherData.dt;
	const weatherDate = new Date(timestamp * 1000);
	const formattedDate = weatherDate.toLocaleString("en-US", {
		timeZone: "UTC",
		hour12: true,
		hour: "2-digit",
		minute: "2-digit",
		day: "numeric",
		month: "short",
		year: "numeric",
	});

	const parts = formattedDate.split(",").map((part) => part.trim());
	const date = parts[0];
	const year = parts[1];
	const time = parts[2];

	const finalDate = `${time} - ${date}, ${year}`;

	return (
		<div className={styles.dataPanel}>
			<span>{Math.round(weatherData.main.temp)}°</span>
			<div className={styles.text}>
				<h2>{weatherData.name}</h2>
				<p>{finalDate}</p>
			</div>
			<div className={styles.icon}>
				<img src='images\weather.png' alt='weather' />
				<p>Partly Cloudy</p>
			</div>
		</div>
	);
}

export default DataPanel;
