import bgRectangleSvg from '../../../../../../assets/bgRectangleBlue.svg'
import ellipseCircleSvg from '../../../../../../assets/Ellipse circle.svg'
import styles from './style.module.css'
function BackgroundSkills() {
    return (
        <span className={styles.bgRectangle}>
            <img
                src={bgRectangleSvg}
                className=''
                alt="Background forms: rectangle with curve"
            />
            <span className={styles.ellipseCircle}>
            <img src={ellipseCircleSvg}
                alt="Background form: ellipse" 
            />
            </span>
        </span>
    )
}
export default BackgroundSkills