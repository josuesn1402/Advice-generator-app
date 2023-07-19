import { useState, useEffect } from 'react';
import CardStyles from '../scss/layout/Card.module.scss';

import PatternDividerDesktop from '../assets/svg/pattern-divider-desktop.svg';
import PatternDividerMobile from '../assets/svg/pattern-divider-mobile.svg';
import Dice from '../assets/svg/icon-dice.svg';

import AdviceData from '../interfaces/AdviceData';

const Card = () => {
	const [num, setNum] = useState<number>(0);
	const [advice, setAdvice] = useState<string>('');

	useEffect(() => {
		fetchAdvice();
	}, []);

	const fetchAdvice = () => {
		fetch('https://api.adviceslip.com/advice')
			.then((response) => response.json() as Promise<AdviceData>)
			.then((data) => {
				setNum(data.slip.id);
				setAdvice(data.slip.advice);
			})
			.catch((error) => console.error('Error: ', error));
	};

	const newFetch = () => {
		fetchAdvice();
	};

	return (
		<div className={CardStyles.Card}>
			<div className={CardStyles.CardTitle}>
				<h2>ADVICEE #{num}</h2>
			</div>
			<div className={CardStyles.CardContent}>
				<p>{advice}</p>
			</div>
			<picture className={CardStyles.CardPicture}>
				<source media='(min-width: 650px)' srcSet={PatternDividerDesktop} />
				<img src={PatternDividerMobile} alt='Pattern Divider' />
			</picture>
			<div className={CardStyles.CardButton} onClick={newFetch}>
				<img className={CardStyles.CardButtonIcon} src={Dice} alt='Dice' />
			</div>
		</div>
	);
};

export default Card;
