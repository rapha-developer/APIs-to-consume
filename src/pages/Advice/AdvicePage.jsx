import HomeHero from "../Home/components/heroSection/HomeHero"
import FindAdvice from "./Find/FindAdvice"
import RandomAdvice from "./Random/RandomAdvice"

function AdvicePage() {
    return (
        <div className='advicePage'>
            <HomeHero />
            <RandomAdvice />
            <FindAdvice />
        </div>
    )
}
export default AdvicePage