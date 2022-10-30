import peoplesInRoundSvg from '../../../../assets/peoplesInRound.svg'
import ellipseSvg from '../../../../assets/Ellipse yellow.svg'

import { createGithubProfile } from '../../../../data/constants'
import AboutHead from './components/head/AboutHead';
import AboutAvatar from './components/avatar/AboutAvatar';
import AboutProfile from './components/profile/AboutProfile';
import styles from './style.module.css'

function AboutUs() {
    const githubData = createGithubProfile

    return (
        <section className={styles.aboutUs}>
            <div className="container">
                <AboutHead  />
                <div className="__body">
                    <div className={styles.__firstRow}>
                        <AboutAvatar image={githubData.image} />
                        <div className={styles.__secondRow}>
                            <AboutProfile 
                                name={githubData.name}
                                bio={githubData.bio}
                            />
                            <div className={styles.__thirdColumn}>
                                <img src={peoplesInRoundSvg} 
                                    alt="Group of people face's" />
                                <img src={ellipseSvg} 
                                    alt="Background circle yellow" 
                                    className={styles.__ellipseSvg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs