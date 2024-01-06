import { WeatherProvider } from "./context/WeatherContext";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
	return (
		<div className='app'>
			<WeatherProvider>
				<Header />
				<Main />
			</WeatherProvider>
		</div>
	);
}

export default App;
