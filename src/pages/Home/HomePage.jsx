import styles from './style.module.css'
import HomeHero from './components/hero/HomeHero'
import MyProjects from './components/projects/MyProjects'
import MySkills from './components/skills/MySkills'
import AboutUs from './components/About/AboutUs'

function HomePage() {

    return (
        <div className="homePage">
            <HomeHero />
            <MyProjects />
            <MySkills />
            <AboutUs />
        </div>
    )
}
export default HomePage