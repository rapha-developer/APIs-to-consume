
import ButtonShop from '../../../../../components/ui/buttonShop/ButtonShop'
import styles from './style.module.css'
function PokeItem(props) {
    const pokeItem = {
        url: props?.url || 'Not found image',
        name: props?.name || 'Not found name',
        price: props?.price || 'Not found price',
    }

    return (
        <div className={styles.pokeItem}>
            <img src={pokeItem.url} 
                alt={pokeItem.name}
                className={styles.pokeItem__image} />
            <div className={styles.pokeItem__info}>
                <h4 className={`capitalize ${styles.pokeItem__name}`}>{pokeItem.name}</h4>
                <p className={styles.pokeItem__price}>{pokeItem.price} x</p>
                <ButtonShop 
                    item={props.foundItem}
                    collectPokeShop={props.collectPokeShop}
                />
            </div>
        </div>
    )
}
export default PokeItem