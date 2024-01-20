import logo from './logo.svg'; // декларативный
import './App.css'; // декларативный
const dateYear = new Date().getFullYear(); // императивный

// сама функция императивный подход
export const App = () => {
	return (
		// код ниже декларативный (мы указываем что хотим получить)
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 3.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>Year: {dateYear}.</p>
			</header>
		</div>
	);
};
