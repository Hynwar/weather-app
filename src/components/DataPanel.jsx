import styles from "./DataPanel.module.css";

function DataPanel() {
	return (
		<div className={styles.dataPanel}>
			<span>27°</span>
			<div className={styles.text}>
				<h2>London</h2>
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
