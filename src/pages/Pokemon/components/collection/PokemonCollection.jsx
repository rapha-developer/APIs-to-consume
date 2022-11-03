
import PokemonItem from '../item/PokemonItem'
import styles from './style.module.css'
function PokemonCollection(props) {
    const pokemon = {
        collection: props?.collection || [{message:'Not found collection in props'}]
    }
    const pokemon__items = pokemon.collection.map((pokemonItem, key) => {
        return (
            <PokemonItem 
                key={pokemonItem.id}
                name={pokemonItem.name}
                image={pokemonItem.sprites.other.dream_world.front_default}
                types={pokemonItem.types}
            />
        );
    });
    return (
        <div className={styles.pokemon__collection}>
            {pokemon__items}
        </div>
    )
}
export default PokemonCollection