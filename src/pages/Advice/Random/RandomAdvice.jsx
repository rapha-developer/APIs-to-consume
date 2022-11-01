import { useState } from 'react'
import videoRectangleSvg from '../../../assets/videoRectangleWithCurve.svg'
import Button from '../../../components/ui/button/Button'
import Card from '../../../components/ui/card/Card'
import { createListOfCardsApi, createFirstAdvice } from '../../../data/constants.js'
import AdviceCard from '../components/card/AdviceCard'
import AdviceHeroSection from '../components/heroSection/AdviceHeroSection'

import styles from './style.module.css'
function RandomAdvice() {
    const [adviceCount, setAdviceCount] = useState(0)
    function increaseAdviceCount() {
        const one = 1
        setAdviceCount((prevAdviceCount) => prevAdviceCount + one)
    }

    const [advice, setAdvice] = useState(createFirstAdvice);
    async function handleClick() {
        const url = `https://api.adviceslip.com/advice`
        await fetch(url)
            .then(res => res.json())
            .then(data => setAdvice(data))
            .catch((error) => alert(error))
        increaseAdviceCount()
    }
    return (
        <section className={styles.randomAdvice}
            id='random-advice-id'>
            <div className="container">
                <div className={styles.__row}>
                    <div className={`__col ${styles.__columnAdviceCard}`}>
                        <AdviceCard advice={advice} />
                    </div>
                    <div className={`__col ${styles.__columnMain}`}>
                        <AdviceHeroSection adviceCount={adviceCount} />
                        <Button text='Get Random Advice' onClick={() => handleClick()}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RandomAdvice