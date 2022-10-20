
import styles from './style.module.css'
function PokeLetreiro(props) {
    const letreiro = {
        money: 'Money',
        coin: 'R$:'
    }
    return (
        <div className={styles.pokeLetreiro}>
            <span className={styles.pokeLetreiro__sino}></span>
            <span className={styles.pokeLetreiro__circle}></span>
            <h3 className={styles.pokeLetreiro__title}>{letreiro.money}</h3>
            <p className={styles.pokeLetreiro__balance}>{letreiro.coin} {props.balance}</p>
        </div>
    )
}
export default PokeLetreiro