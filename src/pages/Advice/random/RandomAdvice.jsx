import { useState } from 'react'
import FlashAdvice from '../components/flash/FlashAdvice'
import HeadlineAdvice from '../components/headline/HeadlineAdvice'
import { adviceCardTitle, headlineAdviceData } from '../../../data/constants'
import styles from './style.module.css'

function RandomAdvice() {
    const [adviceCount, setAdviceCount] = useState(0)
    function increaseAdviceCount() {
        const one = 1  
        setAdviceCount((prevCount) => prevCount + one)
    }

    const [advice, setAdvice] = useState({
        slip: {
            advice: 'Click the button to appear a good advice for you here...',
            id: "This ID is unique for advice"
        }
    });
    async function handleClick() {
        const url = `https://api.adviceslip.com/advice`
        await fetch(url)
        .then(res => res.json())
        .then(data => setAdvice(data))
        .catch((error) => alert(error))

        increaseAdviceCount()
    }
	return (
        <section className={styles.sectionCard}>
            <div className="container">
                <div className={styles.card__row}>
                    <div className="card__col">
                        <FlashAdvice 
                            title={adviceCardTitle}
                            advice={advice}
                        />
                    </div>
                    <div className={`card__col columnInfo`}>
                        <HeadlineAdvice 
                            subtitle={headlineAdviceData.subtitle}
                            title={headlineAdviceData.title}
                            description={headlineAdviceData.description}
                            stats={headlineAdviceData.stats}
                            adviceCount={adviceCount}
                            callAdvice={() => handleClick()}
                        />
                    </div>
                </div>
            </div>
        </section>
	);
}
export default RandomAdvice;
