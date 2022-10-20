import pokeMartSvg from "../../../assets/pokeMart.svg";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import PokeItem from "./components/item/PokeItem";
import PokeLetreiro from "./components/letreiro/PokeLetreiro";
function PokeMart(props) {
	const pokeItems = props.items
    const [pokeShop, setPokeShop] = useState(generatePokeShop())
    function generatePokeShop() {
        const shop = pokeItems.map((item) => {
            return {
                name: item.name,
                price: item.price,
                amount: 0,
            }
        });
        return shop
    }

    const [balance, setBalance] = useState(0)
    useEffect(() => {
        const allPriceForTheItems = pokeShop.map((pokeItem) => {
            return pokeItem.amount * pokeItem.price
        });
        setBalance(allPriceForTheItems.reduce(function(accumulation, item) {
            return accumulation + item
        }));
    }, [pokeShop])
    const collectPokeShop = (item, newAmount) => {
        setPokeShop((prevShop) => prevShop.map((shopItem) => {
            return (shopItem.name === item.name) ?
            {...shopItem, amount: newAmount}
            : {...shopItem}
        }));
    }
    const poke__items = pokeItems.map((pokeItem) => {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/${pokeItem.name}.png`
        const nameWithoutTrace = pokeItem.name.replace('-', '')
        const foundItem = pokeShop.find((item) => item.name === pokeItem.name)
        
        return (
            <PokeItem 
                key={pokeItem.name}
                url={url}
                name={nameWithoutTrace}
                price={pokeItem.price}
                foundItem={foundItem}
                collectPokeShop={collectPokeShop}
            />
        )
    })
	return (
		<section className={styles.pokeMart}>
			<img
				src={pokeMartSvg}
				alt="PokeMart from Nintendo Pokemon Game"
				className={styles.pokeMart__bg}
			/>
			<div className={`container 
                        ${styles.pokeMart__content}`}>
				<div className={styles.__row}>
					<div className={styles.__col}>
                        <PokeLetreiro balance={balance} />
                    </div>
					<div className={styles.__columnWithItems}>
                        <div className={styles.pokeMart__list}>
                            {poke__items}
                        </div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default PokeMart;
