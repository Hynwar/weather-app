function App() {
	return (
		<div className='app'>
			<header>
				<h1>Atmos Weather</h1>
			</header>
			<main>
				<div className='data-panel'>
					<span className='temp'>27°</span>
					<div className='text'>
						<h2 className='location'>London</h2>
						<p className='date'>06:09 - Sun 6 Oct, 2024</p>
					</div>
					<div className='icon'>
						<img src='images\weather.png' alt='weather' />
						<div className='icon-text'>Partly Cloudy</div>
					</div>
				</div>
				<div className='searchbar'>
					<img src='images\Search.png' alt='search icon' />
					<input type='search' />
				</div>
			</main>
		</div>
	);
}

export default App;
