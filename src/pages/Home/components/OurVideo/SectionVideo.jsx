import elipseYellowSvg from '../../../../assets/Ellipse yellow.svg'
import videoRectangleSvg from '../../../../assets/videoRectangleWithCurve.svg'
import peoplesInPresentationSvg from '../../../../assets/peoplesInPresentation.svg'
import playButtonSvg from '../../../../assets/play-rounded-button 1.svg'
import styles from './style.module.css'

function SectionVideo() {
    const sectionData = {
        title: 'Great Digital Product Agency since 2016 ',
        description: "Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements."
    }
    return (
        <section className={styles.sectionVideo}>
            <div className="container">
                <div className={styles.__row}>
                    <div className={styles.__columnVideo}>
                        <div className={styles.__bgVideo}>
                            <img src={peoplesInPresentationSvg}
                                className="" 
                                alt="Peoples in presentation" />
                            <img src={playButtonSvg}
                                className={styles.__playButton}
                                alt="Yellow elipse" />
                            <img src={elipseYellowSvg}
                                className={styles.__yellowElipse} 
                                alt="" />
                        </div>
                    </div>
                    <div className={`__col ${styles.__columnMain}`}>
                            <img src={videoRectangleSvg}
                                className={styles.__bgMainColumn} 
                                alt="" />
                            <div className={styles.__columnWithInformation}>
                                <h2 className={styles.__title}>{sectionData.title}</h2>
                                <p className={styles.__description}>{sectionData.description}</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionVideo