import styles from './style.module.css'
import HomeHero from './components/hero/HomeHero'
import MyProjects from './components/projects/MyProjects'
import AllApis from './components/allApis/AllApis'
import SectionVideo from './components/OurVideo/SectionVideo'
import AboutUs from './components/About/AboutUs'
import Subscribe from './components/Subscribe/Subscribe'

function HomePage() {

    return (
        <div className="homePage">
            <HomeHero />
            <MyProjects />
            <AllApis />
            <SectionVideo />
            <AboutUs />
            <Subscribe />
        </div>
    )
}
export default HomePage