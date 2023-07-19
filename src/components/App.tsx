import AppStyles from '../scss/layout/App.module.scss';

import Card from './Card';

function App() {
	return (
		<main className={AppStyles.Container}>
			<Card></Card>
		</main>
	);
}

export default App;
