
import styles from './style.module.css'
function ButtonShop(props) {
    const item = props?.item || 'Not found item'

    function handleDecrease( { name, amount } ) {
        const oneLess = -1
        const newAmount = (amount === 0) ? amount : amount + oneLess
        props.collectPokeShop(item, newAmount)
    }
    function handleIncrease( { name, amount }) {
        const moreOne = 1
        props.collectPokeShop(item, amount + moreOne)
    }
    return (
        <div className={styles.pokeItem__buy}>
            <button className={`${styles.btn} ${styles.btn__decrease}`} 
                    onClick={() => handleDecrease(item)}>-</button>
            <p className={styles.pokeItem__amount}>{item.amount}</p>
            <button className={`${styles.btn} ${styles.btn__increase}`}
                    onClick={() => handleIncrease(item)}>+</button>
        </div>
    )
}
export default ButtonShop