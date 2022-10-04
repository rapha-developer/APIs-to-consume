import subscribeGridSvg from '../../../../assets/subscribeGrid.svg'
import rectangleWithCurveSvg from '../../../../assets/homeRectangleWithCurve.svg'
import AdviceForm from '../form/AdviceForm';

import styles from './style.module.css'

function AdviceHeroForm(props) {
    const heroForm = {
        title: props?.title || "Find Advice by 'subject'",
        collections: props.collectResults,
        button__text: props?.button__text || 'Find Advice'
    }
	return (
		<div className={`${styles.heroForm__layers} container`}>
			<span className={styles.heroForm__grid}>
				<img
					src={subscribeGridSvg}
					alt="Grid made with several dots next to each other"
				/>
			</span>
			<span className={styles.heroForm__rectangle}>
				<img src={rectangleWithCurveSvg} alt="Rectangle with Curve" />
			</span>
			<div className={styles.heroForm__card}>
				<div className='row'>
					<div className='__firstColumn'>
						<h2 className={styles.__title}>
							{heroForm.title}
						</h2>
					</div>
					<div className='__secondColumn'>
						<AdviceForm
							collectResults={heroForm.collections}
							button__text={heroForm.button__text}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AdviceHeroForm
