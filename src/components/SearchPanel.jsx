import { useEffect, useState } from "react";
import styles from "./SearchPanel.module.css";
import { useWeather } from "../context/WeatherContext";

const url = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "9219e702eamsh20426df85e13c8cp169243jsnf797d4cc9c8d",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
};

function SearchPanel() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const { getWeatherData } = useWeather();

	useEffect(() => {
		if (!searchQuery) return;

		async function fetchSearchResults() {
			try {
				const res = await fetch(
					`${url}/cities?types=CITY&minPopulation=10000&namePrefix=${searchQuery}`,
					options
				);
				const result = await res.json();
				setSearchResults(result.data);
			} catch (error) {
				throw new Error(error);
			}
		}
		fetchSearchResults();
	}, [searchQuery]);

	function handleSelect(id) {
		const selectedCity = searchResults.find(
			(result) => result.wikiDataId === id
		);
		setSearchQuery("");
		getWeatherData(
			selectedCity.latitude,
			selectedCity.longitude,
			selectedCity.city
		);
	}

	return (
		<div>
			<div
				className={`${styles.searchBar} ${searchQuery ? styles.active : ""}`}>
				<img src='images\Search.png' alt='search icon' />
				<input
					type='search'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div
				className={`${styles.searchResults} ${
					searchQuery ? styles.active : ""
				}`}>
				{searchResults && (
					<ul>
						{searchResults.map((results) => (
							<li
								key={results.wikiDataId}
								onClick={() => handleSelect(results.wikiDataId)}>
								{results.city}, {results.countryCode}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default SearchPanel;
