
import styles from './style.module.css'
function PokeBodyHero(props) {
    const bodyHero = {
        title: props?.title || 'species attributes',
        description: props?.description || '“Os atributos da espécie” ~ portuguese.'
    }
	return (
		<div className={styles.bodyHero}>
			<h4 className={`uppercase ${styles.bodyHero__title}`}>
				{bodyHero.title}
			</h4>
			<p className={styles.bodyHero__description}>
				<i>{bodyHero.description}</i>
			</p>
		</div>
	);
}
export default PokeBodyHero;
