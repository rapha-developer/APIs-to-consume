import bgRectangleSvg from "../../../../assets/bgRectangleBlue.svg";

import ellipseCircleSvg from '../../../../assets/Ellipse circle.svg'
import rectangleWithCurveSvg from "../../../../assets/homeRectangleWithCurve.svg";
import gridSvg from "../../../../assets/homeGrid.svg";
import styles from "./style.module.css";
import { createListOfCardsApi } from '../../../../data/constants'
import Card from "../../../../components/ui/card/Card";

function AllApis() {
	const heroAPIS = {
		title: "How can we help your Business ?",
		description:
			"We build readymade websites, mobile applications, and elaborate online business services.",
	};
	const cards = createListOfCardsApi
	const card__items = cards.map((cardItem, key) => {
		return (
			<Card 
				key={key}
				title={cardItem.title}
				description={cardItem.description}
				iconType={cardItem.iconType}
			/>
		)
	});

	return (
		<section className={styles.AllApis}>
			<span className={styles.bgRectangle}>
				<img
					src={bgRectangleSvg}
					className=''
					alt="Background forms: rectangle with curve"
				/>
				<span className={styles.ellipseCircle}>
				<img src={ellipseCircleSvg}
					alt="" 
				/>
				</span>
			</span>
			<div className="container">
				<div className={styles.__row}>
					<img
						src={rectangleWithCurveSvg}
						className={styles.bgRectangleWithCurve}
						alt="Background forms: rectangle with curve"
					/>
					<div className={`${styles.__col} ${styles.__columnMain}`}>
						<div className="groupMain">
							<h2 className={styles.__title}>{heroAPIS.title}</h2>
							<p className={styles.__description}>
								{heroAPIS.description}
							</p>
						</div>
						<img
							src={gridSvg}
							className={styles.card__bgGrid}
							alt="Background grid: dots placed side by side"
						/>
					</div>
					<div className={`${styles.__col} ${styles.__columnCards}`}>
						<div className={styles.apis__collection}>
							{card__items}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default AllApis;
