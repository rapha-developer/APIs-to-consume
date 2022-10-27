import { useState } from "react"
import NotFoundCard from "../../../../components/ui/notFound/NotFoundCard"
import AllItems from "../../Explore/components/all/AllItems"
import ExploreItems from "../../Explore/ExploreItems"
import PokeMartHero from "../../Mart/components/hero/PokeMartHero"
import { createItemsToBuildStoreOfPokeMart, createPagesPosition } from '../../../../data/constants'
function PokeExplorePage(props) {
    const usePokeMart = {
        show:props?.showPokeMart || false,
        product: props?.product || createItemsToBuildStoreOfPokeMart[createPagesPosition.first].product,
        items: getItemsToBuildPokeMart(props.product || createItemsToBuildStoreOfPokeMart[createPagesPosition.first].product)
    }
    function getItemsToBuildPokeMart(product) {
        const foundStore = createItemsToBuildStoreOfPokeMart.find((storeItem) => storeItem.product === product)
        return foundStore.items
    }
    const [collectItems, setCollectItems] = useState([])
    const [showAllItems, setShowAllItems] = useState(false)
    const [showAnyItems, setShowAnyItems] = useState(false)
    const collectResponseFromItems = (response) => {
        setCollectItems(response)
        setShowAllItems(true)
        setShowAnyItems(false)
    }
    const collectErrorsFromResponseItems = (errors) => {
        alert(errors)
        setShowAllItems(false)
        setShowAnyItems(true)
    }
    return (
        <div className="explorePage">
            <ExploreItems 
                title={`Select ${props.type} items`}
                description={`All the Pokémon ${props.type} items you'll ever need in one place, easily accessible through a modern RESTful API.`}
                type={props.type}
                collectResponse={collectResponseFromItems}
                collectErrors={collectErrorsFromResponseItems}
            />
            {showAllItems && <AllItems 
                                name={collectItems.name}
                                items={collectItems.items}
                            />}
            {showAnyItems &&
                <div className="container">
                    <NotFoundCard 
                        title='Not found any Pokemon(s) from chosen category'
                        shadow='no'
                    />
                </div>
            }
            {usePokeMart.show && <div style={{marginBottom: '100px'}}> 
                                <PokeMartHero 
                                    title={`Welcome to PokeMart-${props.product}`}
                                    product={props.product}
                                    items={usePokeMart.items}
                                />
                            </div>
            }
        </div>
    )
}
export default PokeExplorePage