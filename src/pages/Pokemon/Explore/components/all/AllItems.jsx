import { useEffect, useState } from "react";
import PokeItemsCollection from "../collection/PokeItemsCollection";
import styles from "./style.module.css";
function AllItems(props) {
	const pokeList = {
        name: props?.name || 'Not found name in props',
		items: props?.items || [],
        size: props?.items?.length || 0
	};
    useEffect(() => {
        createItemsToBuildCollection()
    }, [pokeList.items])
    const [items, setItems] = useState([])
    function createItemsToBuildCollection() {
        const itemsPromises = []
        pokeList.items.map((item) => {
            itemsPromises.push(fetch(item.url).then(res => res.json()));
        });
        Promise.all(itemsPromises)
            .then(allItems => setItems(allItems))
            .catch(error => alert('itemPromises not working' + error))
    }
	const nameWithoutTrace = pokeList.name.replaceAll('-', ' ');
    const allItemsHero = {
		title: `${pokeList.size} Poke items found`,
		description: `Uma lista de ${pokeList.size} Poke items foram encontrados nesta { ${nameWithoutTrace} } categoria`
	}
	return (
		<div className={styles.allItems}>
			<div className="container">
				<div className={styles.allItems__header}>
					<h2 className={styles.allItems__title}>
						{allItemsHero.title}
					</h2>
					<p className={styles.allItems__description}>
						{allItemsHero.description}
					</p>
				</div>
                <PokeItemsCollection collection={items} />
			</div>
		</div>
	);
}
export default AllItems;
