import HomeHero from "../Home/components/hero/HomeHero"
import FindAdvice from "./Find/FindAdvice"
import RandomAdvice from "./Random/RandomAdvice"

function AdvicePage() {
    const adviceHero = {
        title: 'Advice Slip API',
        description: 'The Advice Slip JSON API is provided for free. 😎 It currently gives out over 10 million pieces of advice every year. Made by Tom Kiss, purely to satisfy a lifelong disappointment felt when being asked this question by cash machines. ',
        button__text: 'Check features below'
    }
    return (
        <div className='advicePage'>
            <HomeHero
                title={adviceHero.title}
                description={adviceHero.description}
                button__text={adviceHero.button__text}
            />
            <RandomAdvice />
            <FindAdvice />
        </div>
    )
}
export default AdvicePage