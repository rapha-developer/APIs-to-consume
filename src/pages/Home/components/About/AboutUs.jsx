import peoplesInRoundSvg from '../../../../assets/peoplesInRound.svg'
import ellipseSvg from '../../../../assets/Ellipse yellow.svg'

import { createGithubProfile } from '../../../../data/constants'
import AboutHead from './components/head/AboutHead';
import AboutAvatar from './components/avatar/AboutAvatar';
import AboutProfile from './components/profile/AboutProfile';
import styles from './style.module.css'
import { useEffect, useState } from 'react';

function AboutUs() {
    useEffect(() => {
        getUserFromGithubAPi()
    }, []);
    const [user, setUser] = useState({})
    function getUserFromGithubAPi() {
        const url = "https://api.github.com/users/rapha-developer"
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }
    const githubData = (user?.avatar_url) ? user : createGithubProfile
    
    return (
        <section className={styles.aboutUs}>
            <div className="container">
                <AboutHead  />
                <div className="__body">
                    <div className={styles.__firstRow}>
                        <AboutAvatar image={githubData.avatar_url} />
                        <div className={styles.__secondRow}>
                            <AboutProfile 
                                name={githubData.name}
                                bio={githubData.bio}
                            />
                            <div className={styles.__thirdColumn}>
                                <img src={peoplesInRoundSvg} 
                                    alt="Group of people face's" />
                                <img src={ellipseSvg} 
                                    alt="Background circle yellow" 
                                    className={styles.__ellipseSvg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs