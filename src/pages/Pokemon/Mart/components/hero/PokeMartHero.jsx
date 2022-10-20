
import RectangleWithCurveSvg from '../../../../../assets/homeRectangleWithCurve.svg'
import PokeMart from '../../PokeMart'
import styles from './style.module.css'
function PokeMartHero(props) {
    const pokeHero = {
        title: props?.title || 'Welcome to PokeMart',
        description: props?.description || 'A Poke Mart is a place where the player can buy items for their Pokémon. It has people to talk to who can give hints on some of the items. For example, here you can buy ',
        product: props?.product || '...',
        items: props?.items || []
    }
    return (
        <section className={styles.pokeHero}>
            <div className={`container 
            ${styles.pokeHero__content}`}>
                <img src={RectangleWithCurveSvg} 
                    alt="rectangular shape with a curve on one sides sides" 
                    className={styles.bgRectangleWithCurve} />
                <div className={styles.pokeHero__info}>
                    <h2 className={styles.pokeHero__title}>{pokeHero.title}</h2>
                    <p className={styles.pokeHero__description}>{pokeHero
                    .description}<span>{pokeHero.product}</span></p>
                </div>
            </div>
            <PokeMart items={pokeHero.items}/>
        </section>
    )
}
export default PokeMartHero