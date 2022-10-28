
import ContactSocialItem from '../item/ContactSocialItem';
import styles from './style.module.css'
function ContactSocial(props) {
    const socialMedias = (props?.socialMedias) ? props.socialMedias : []
    const contact__items = socialMedias.map((socialItem) => {
        const target = (socialItem.name === 'email') ? false : true
        return (
            <ContactSocialItem 
                key={socialItem.name}
                name={socialItem.name}
                username={socialItem.username}
                url={socialItem.url}
                iconUrl={socialItem.iconUrl}
                target={target}
            />
        );
    })
    return (
        <div className={styles.contact__social}>
            {contact__items}
        </div>
    )
}
export default ContactSocial