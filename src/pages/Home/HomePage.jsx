import styles from './style.module.css'
import HomeHero from './components/hero/HomeHero'
import MyProjects from './components/projects/MyProjects'
import MySkills from './components/skills/MySkills'
import SectionVideo from './components/OurVideo/SectionVideo'
import AboutUs from './components/About/AboutUs'
import Subscribe from './components/Subscribe/Subscribe'

function HomePage() {

    return (
        <div className="homePage">
            <HomeHero />
            <MyProjects />
            <MySkills />
            <SectionVideo />
            <AboutUs />
            <Subscribe />
        </div>
    )
}
export default HomePage