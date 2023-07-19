import CardStyles from '../scss/layout/Card.module.scss';

import PatternDividerDesktop from '../assets/svg/pattern-divider-desktop.svg';
import PatternDividerMobile from '../assets/svg/pattern-divider-mobile.svg';
import Dice from '../assets/svg/icon-dice.svg';

const Card = () => {
	return (
		<div className={CardStyles.Card}>
			<div className={CardStyles.CardTitle}>
				<h2>ADVICEE #117</h2>
			</div>
			<div className={CardStyles.CardContent}>
				<p>
					“It is easy to sit up and take notice, what's difficult is getting up
					and taking action”
				</p>
			</div>
			<picture className={CardStyles.CardPicture}>
				<source media='(min-width: 650px)' srcSet={PatternDividerDesktop} />
				<img src={PatternDividerMobile} alt='Pattern Divider' />
			</picture>
			<div className={CardStyles.CardButton}>
				<img className={CardStyles.CardButtonIcon} src={Dice} alt='Dice' />
			</div>
		</div>
	);
};

export default Card;
