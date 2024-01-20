import logo from './logo.svg'; // декларативный
import './App.css'; // декларативный
import { createElement } from 'react';
const dateYear = new Date().getFullYear(); // императивный

// сама функция императивный подход
export const App = () => {
	return (
		// код ниже декларативный (мы указываем что хотим получить)
		createElement(
			'div',
			{ className: 'App' },
			createElement(
				'header',
				{ className: 'App-header' },
				createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
				createElement(
					'p',
					null,
					'Edit ',
					createElement('code', null, 'src/App.js'),
					' and save to reload 3.',
				),
				createElement(
					'a',
					{
						className: 'App-link',
						href: 'https://reactjs.org',
						target: '_blank',
						rel: 'noopener noreferrer',
					},
					'Learn React',
				),
				createElement('p', null, `Year: ${dateYear}`),
			),
		)
	);
};
