
import styles from './style.module.css'
function AboutProfile(props) {
    const profile = {
        name: props?.name || 'Not found name in props',
        bio: props?.bio || 'Not found bio in props'
    }
    return (
        <div className={`__col ${styles.aboutProfile}`}>
            <h4 className={styles.aboutProfile__name}>{profile.name}</h4>
            <p className={styles.aboutProfile__bio}>{profile.bio}</p>
        </div>
    )
}
export default AboutProfile