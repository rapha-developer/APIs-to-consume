
import Button from '../../../../components/ui/button/Button'
import styles from './style.module.css'

function RickSingleProfile(props) {
    const defaultEpisodesSize = 1;
    const defaultMaximumEpisodesSize = 51
    const profile = {
        id: props?.id || 'Not found ID of character',
        image: props?.image || 'Not found image of character',
        name: props?.name || "Not found name of character",
        gender: props?.gender || "Not found gender of character",
        species: props?.species || "Not found species of character",
        status: props?.status || "Not found status of character",
        episodes: {
            list: props.episode || 'Not found any episodes from API',
            size: props?.episode?.length || defaultEpisodesSize,
            sizeInPercentage: makeSizeInPercentage(props?.episode?.length || defaultEpisodesSize),
            maxSize: defaultMaximumEpisodesSize
        },
        location: {
            name: props.location?.name || "Not found location name in props"
        },
        origin: {
            name: props.origin?.name || "Not found origin name in props"
        }, 
        username: props?.username || makeUsername(props?.name || "Not found name to make username"),
        url: props?.url || '#'
    }
    function makeSizeInPercentage(number) {
        const hundred = 100
        const sizeInPercentage = ((number / defaultMaximumEpisodesSize) * hundred)
        return sizeInPercentage + '%'
    }
    function makeUsername(name) {
        const username = '@' + name.replace(/\s/g, '');
        return username
    }
    
    return (
        <div className={styles.rickProfileCard}>
            <div className="rickProfileCard__head">
                <img src={profile.image}
                    className={styles.__image}
                    alt='Face of character' />
                <h4 className={styles.__name}>{profile.name}</h4>
                <p className={styles.__username}>{profile.username}</p>
                <div className={styles.__attributes}>
                    <p className={styles.attribute__item}
                        data-color='status'>{profile.status}</p>
                    <p className={styles.attribute__item}
                        data-color='gender'>{profile.gender}</p>
                    <p className={styles.attribute__item}
                        data-color='species'>{profile.species}</p>
                    <p className={styles.attribute__item}
                        data-color='location'>{profile.location.name}</p>
                    <p className={styles.attribute__item}
                        data-color='origin'>{profile.origin.name}</p>
                </div>
            </div>
            <div className="rickProfileCard__body">
                <h6 className={styles.heroEpisodes}>{profile.episodes.size}/{profile.episodes.maxSize} Character appearances in the series</h6>
                <div className={styles.__episodes}>
                    <span className={styles.progressBar__base} 
                        style={{width: '100%'}}></span>
                    <span className={styles.progressBar__episode} 
                        style={{width: profile.episodes.sizeInPercentage}}></span>
                </div>
                <a href={profile.url}
                    target='_blank'
                    className={styles.profile__link}>
                    <Button text='Check { JSON }'/>
                </a>
            </div>
        </div>
    )
}
export default RickSingleProfile