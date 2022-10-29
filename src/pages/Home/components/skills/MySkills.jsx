
import rectangleWithCurveSvg from "../../../../assets/homeRectangleWithCurve.svg";
import gridSvg from "../../../../assets/homeGrid.svg";
import { createListOfCardsApi } from '../../../../data/constants'
import styles from "./style.module.css";
import BackgroundSkills from './components/background/BackgroundSkills';
import SkillsHero from './components/hero/SkillsHero';
import SkillsCollection from './components/collection/SkillsCollection';
function MySkills(props) {
    const cards = createListOfCardsApi
    return (
        <section className={styles.skills}>
            <BackgroundSkills />
            <div className="container">
                <div className={styles.__row}>
                    <img
                        src={rectangleWithCurveSvg}
                        className={styles.bgRectangleWithCurve}
                        alt="Background forms: rectangle with curve"
                    />
                    <div className={`.__col ${styles.__columnMain}`}>
                        <SkillsHero />
                        <img
                            src={gridSvg}
                            className={styles.card__bgGrid}
                            alt="Background grid: dots placed side by side"
                        />
                    </div>
                    <div className={`.__col ${styles.__columnCards}`}>
                        <SkillsCollection skills={cards} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MySkills