import { useState } from "react"
import NotFoundCard from "../../../../components/ui/notFound/NotFoundCard"
import AllItems from "../../Explore/components/all/AllItems"
import ExploreItems from "../../Explore/ExploreItems"

function PokeExplorePage(props) {
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
        </div>
    )
}
export default PokeExplorePage