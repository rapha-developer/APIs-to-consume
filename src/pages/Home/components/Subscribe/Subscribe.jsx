import Submit from '../../../../components/ui/submit/Submit'
import gridSvg from '../../../../assets/homeGrid.svg'

import subscribeGridSvg from '../../../../assets/subscribeGrid.svg'
import rectangleWithCurveSvg from '../../../../assets/homeRectangleWithCurve.svg'

import styles from './style.module.css'

function Subscribe() {
    const subscribeData = {
        title: 'Subscribe Newsletter',
        subtitle: 'I will update good news and promotion service not spam'
    }
    return (
        <section className={styles.subscribe}>
            <div className={`${styles.subscribe__layers} container`}>            
                <span className={styles.subscribe__grid}>
                    <img src={subscribeGridSvg} 
                        alt="Grid made with several dots next to each other" />
                </span>
                <span className={styles.subscribe__rectangle}>
                    <img src={rectangleWithCurveSvg} 
                        alt="Rectangle with Curve" />
                </span>
                <div className={styles.subscribe__card}>
                    <span className={styles.subscribe__bg}></span>
                    <div className={styles.__row}>
                        <div className={styles.__firstColumn}>
                            <div className={styles.__columnMain}>
                                <h2 className={styles.__title}>{subscribeData.title}</h2>
                                <p className={styles.__subtitle}>{subscribeData.subtitle}</p>
                            </div>
                        </div>
                        <div className={styles.__secondColumn}>
                            <form action="#" className={styles.subscribe__form}>
                                <div className={styles.form__group}>
                                    <input type="text" 
                                        className={styles.form__field} 
                                        placeholder='Enter your email address..' />
                                    <Submit text='Contact now' />
                                </div>
                            </form>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
    );
}
export default Subscribe