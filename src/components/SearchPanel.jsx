import styles from "./SearchPanel.module.css";

function SearchPanel() {
	return (
		<div>
			<div className={styles.searchBar}>
				<img src='images\Search.png' alt='search icon' />
				<input type='search' />
			</div>
			<div className={styles.searchResults}>
				<ul>
					<li>Query 1</li>
				</ul>
			</div>
		</div>
	);
}

export default SearchPanel;
