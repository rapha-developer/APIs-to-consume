
import ContactInfoBgSvg from '../../../../assets/contactBgInfo.svg'
import { createSocialMediasToContactSocial } from '../../../../data/constants'
import ContactSocial from '../social/ContactSocial'
import styles from './style.module.css'
function ContactInfo(props) {
    const contactInfo = {
        subtitle: props?.subtitle || 'Biography',
        text: props?.text || "I'm brazilian front-end developer, procurando construir awesome aplicações web e mobile, com utilização de pequenos componentes reutilizáveis, organizados e fáceis de realizar manutenção."
    }
    
    return (
        <section className={styles.contactInfo}>
            <div className="container">
                <div className={styles.__row}>
                    <div className={styles.__columnMain}>
                        <div className={styles.columnMain__head}>
                            <img src={ContactInfoBgSvg} 
                                alt="illustration: woman sitting on a puff, watching social media on smart phone"
                                className={styles.contactInfo__bg}
                            />
                        </div>
                        <div className={styles.columnMain__body}>
                            <div className={styles.contactInfo__group}>
                                <h4 className={styles.contactInfo__subtitle}>
                                    {contactInfo.subtitle}
                                </h4>
                                <p className={styles.contactInfo__text}>
                                    {contactInfo.text}
                                </p>
                            </div>
                            <div className={styles.contactInfo__group}>
                                <h4 className={styles.contactInfo__subtitle}>
                                    {createSocialMediasToContactSocial.title}
                                </h4>
                                <ContactSocial 
                                    socialMedias={createSocialMediasToContactSocial.data}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.__columnMap}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58530.8487946734!2d-46.44102251558844!3d-23.526097684934793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1666980326688!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{border:'0'}} loading="lazy" title="Mapa do Google que mostra a região Zona Leste" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactInfo