import peoplesInRoundSvg from '../../../../assets/peoplesInRound.svg'
import ellipseSvg from '../../../../assets/Ellipse yellow.svg'
import ellipseCircleSvg from '../../../../assets/Ellipse circle.svg'
import dotsSvg from '../../../../assets/Dot.svg';

import styles from './style.module.css'

function AboutUs() {
    const aboutUs = {
        title: 'What our happy client say',
        description: 'Several selected clients, who already believe in our service.'
    }
    const githubData = {
        image: 'https://avatars.githubusercontent.com/u/91702283?v=4',
        name: 'Raphael M. Developer',
        bio: 'Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.',
        // bio: 'Web Developer | Front-end developer | Formado em Ciência da Computação | Programo em HTML5, CSS3, Javascript, React e PHP.'
    }
    return (
        <section className={styles.aboutUs}>
            <div className="container">
                <div className={styles.aboutUs__head}>
                    <h2 className={styles.aboutUs__title}>{aboutUs.title}</h2>
                    <p className={styles.aboutUs__description}>{aboutUs.description}</p>
                </div>
                <div className="__body">
                    <div className={styles.__firstRow}>
                        <div className={styles.__firstColumn}>
                            <img src={githubData.image}
                                className={styles.__image}
                                alt="Image of programmer guy from my github profile" />
                            <img src={ellipseCircleSvg}
                                className={styles.__ellipseCircle} 
                                alt="Circle red" />
                            <img src={dotsSvg}
                                className={styles.__dots} 
                                alt="Dots" />
                        </div>
                        <div className={styles.__secondRow}>
                            <div className={`__col ${styles.aboutUs__profile}`}>
                                <h4 className={styles.aboutUs__name}>{githubData.name}</h4>
                                <p className={styles.aboutUs__bio}>{githubData.bio}</p>
                            </div>
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