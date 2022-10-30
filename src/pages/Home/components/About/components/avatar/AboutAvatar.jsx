
import ellipseCircleSvg from '../../../../../../assets/Ellipse circle.svg'
import dotsSvg from '../../../../../../assets/Dot.svg'
import styles from './style.module.css'
function AboutAvatar(props) {
    return (
        <div className={styles.about__avatarColumn}>
            <img src={props.image}
                className={styles.__image}
                alt="Image of programmer guy from my github profile" />
            <img src={ellipseCircleSvg}
                className={styles.__ellipseCircle} 
                alt="Circle red" />
            <img src={dotsSvg}
                className={styles.__dots} 
                alt="Dots" />
        </div>
    )
}
export default AboutAvatar