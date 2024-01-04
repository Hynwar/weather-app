import { useState } from "react";
import styles from "./SearchPanel.module.css";

function SearchPanel() {
	const [searchQuery, setSearchQuery] = useState("");

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
				<ul></ul>
			</div>
		</div>
	);
}

export default SearchPanel;
