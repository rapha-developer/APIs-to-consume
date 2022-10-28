
import contactBgSvg from '../../../../assets/contactBgHero.svg'
import styles from './style.module.css'
function ContactHero(props) {
    const contactHero = {
        title: props?.title || 'Contact Us',
        description: props?.description || "Let's Go! Vamos, juntos, criar aplicativos que oferecem experiências únicas, com foco nas necessidades do cliente e transformando os problemas do mundo real em soluções no mundo virtual.",
        contact__text: "Contacte-nos pelas minhas redes sociais."
    }
    return (
        <section className={styles.contactHero}>
            <img src={contactBgSvg} 
                alt="Blue background with many lines and circles in different parts" 
                className={styles.contactHero__bg} />
            <div className="container">
                <h1 className={styles.contactHero__title}>
                    {contactHero.title}
                </h1>
                <p className={styles.contactHero__description}>
                    {contactHero.description}<br /><br />
                    {contactHero.contact__text}
                </p>
            </div>
        </section>
    )
}
export default ContactHero