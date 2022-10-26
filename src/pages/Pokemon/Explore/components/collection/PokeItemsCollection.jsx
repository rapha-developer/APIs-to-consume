
import { useEffect, useState } from 'react';
import pokeImageNotFound from '../../../../../assets/poke-image-not-found.svg'
import PokeItem from '../item/PokeItem';
import styles from './style.module.css'
function PokeItemsCollection(props) {
    const pokeItems = {
        collection: props?.collection || [{message:'Not found collection in props'}]
    }
    useEffect(() => {
        createStatusFromImagesCollection()
    }, [pokeItems.collection])
    const [allItemsWithStatusImage, setAllItemsWithStatusImage] = useState([])
    function createStatusFromImagesCollection() {
        const imagePromises = []
        pokeItems.collection.map((pokeItem) => {
            const name = pokeItem.name.replace('-', ' ')
            const description = getFirstEnglishDescription(pokeItem.flavor_text_entries)
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/${pokeItem.name}.png`
            imagePromises.push(fetch(image).then(res => { 
                return {
                    name: name,
                    description: description,
                    image: {
                        url: image,
                        status: res.status
                    }
                }
            }));
        });
        Promise.all(imagePromises)
            .then(allItemsWithStatus => setAllItemsWithStatusImage(allItemsWithStatus))
            .catch(error => new Error('Error message: ' + error))
    }
    function getFirstEnglishDescription(flavor_text_entries) {
        const english = 'en'
        const firstText = 0
        const descriptions = flavor_text_entries.filter((flavor_text) => flavor_text.language.name === english)
        return descriptions[firstText]
    }

    const pokeItems__collection = allItemsWithStatusImage.map((pokeItem, key) => {
        return (
            <PokeItem 
                key={key}
                name={pokeItem.name}
                description={pokeItem.description.text}
                image={pokeItem.image.url}
                status={pokeItem.image.status}
            />
        )
    });

    return (
        <div className={styles.pokeItems__collection}>
            {pokeItems__collection}
        </div>
    )
}
export default PokeItemsCollection