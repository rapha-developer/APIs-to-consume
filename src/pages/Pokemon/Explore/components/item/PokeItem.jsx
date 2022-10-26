import pokeImageNotFound from '../../../../../assets/poke-image-not-found.svg'
import styles from "./style.module.css";
function PokeItem(props) {
	const OK = 200
	const image = ((props?.status) && props.status === OK) ? props.image : pokeImageNotFound  
	const pokeItem = {
        name: props?.name || 'Not found name in props',
        image: image,
        description: props?.description || 'Not found description in props'
    }
    return (
		<div className={styles.pokeItem}>
			<div className={styles.pokeItem__head}>
				<img
					src={pokeItem.image}
					alt={pokeItem.name}
					className={styles.pokeItem__image}
				/>
			</div>
			<div className={styles.pokeItem__body}>
				<h4 className={`capitalize ${styles.pokeItem__name}`}>
					{pokeItem.name}
				</h4>
				<p className={styles.pokeItem__description}>
					{pokeItem.description}
				</p>
			</div>
		</div>
	);
}
export default PokeItem;
