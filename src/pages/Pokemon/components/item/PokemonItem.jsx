
import styles from './style.module.css'
function PokemonItem(props) {
    const pokemon = {
        name: props?.name || 'Not found name in props',
        image: props?.image || '',
        types: props?.types || 'Not found types in props'
    }
    const types = pokemon.types.map((typeItem, key) => {
        return (
            <p  key={key}
                className={`capitalize ${styles.pokemon__type}`}
                data-color={typeItem.type.name} >
                {typeItem.type.name}
            </p>
        )
    });
    return (
        <div className={styles.pokemon__item}>
            <div className="pokemon__head">
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className={styles.pokemon__image}
                />
            </div>
            <div className={styles.pokemon__body}>
                <h4 className={`capitalize ${styles.pokemon__name}`}>
                    {pokemon.name}
                </h4>
                <div className={styles.pokemon__types}>
                    {types}
                </div>
            </div>
        </div>
    );
}
export default PokemonItem