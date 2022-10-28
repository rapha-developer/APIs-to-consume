
import styles from './style.module.css'
function ContactSocialItem(props) {
    const socialItem = {
        name: props?.name || 'Not found name in props',
        username: props?.username || 'Not found username in props',
        url: props?.url || 'Not found url in props',
        iconUrl: props?.iconUrl || 'Not found iconUrl in props',
        openInNewTab: (props?.target && props.target === true) ? '_blank' : ''
    }
    return (
        <div className={styles.contact__item} key={socialItem.name}>
            <img 
                src={socialItem.iconUrl} 
                alt={socialItem.name} 
                className={styles.contact__image} 
            />
            <p className=''>
                <a href={socialItem.url}
                target={socialItem.openInNewTab}
                className={styles.contact__link}>
                    {socialItem.username}
                </a>
            </p>
        </div>
    )
}
export default ContactSocialItem