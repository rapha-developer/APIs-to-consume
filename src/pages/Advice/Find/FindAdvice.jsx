import { useState } from 'react'
import { createInputToFindAdvice } from '../../../data/constants'

import Submit from '../../../components/ui/submit/Submit'
import AdviceHeroForm from '../components/heroForm/AdviceHeroForm'
import Input from '../../../components/ui/input/Input'

import error from '../../../assets/error.svg'
import NotFoundAdvices from '../components/error/NotFoundAdvices'
import styles from './style.module.css'
import Icon from '../../../components/ui/icon/Icon'
import AdviceList from '../components/list/AdviceList'

function FindAdvice() {
    const [resultsFromApi, setResultsFromApi] = useState([])
    const collectResults = (response) => {
        setResultsFromApi(response)
    }
    const keyWordToNotFoundAdvice  = 'message'
    const keywordToListAdvices = 'slips'
    const keysFromResponseApi = Object.keys(resultsFromApi)

    const showNotFoundAdvices = keysFromResponseApi.includes(keyWordToNotFoundAdvice)
    const showAllAdvices = keysFromResponseApi.includes(keywordToListAdvices)

    return (
        <section className={styles.findAdvice}>
            <AdviceHeroForm 
                title="Find Advice by 'subject'"
                collectResults={collectResults}
                button__text='Find Advice'
            />
            <div className="container">
                {showNotFoundAdvices && 
                    <NotFoundAdvices 
                        message={resultsFromApi[keyWordToNotFoundAdvice].text}
                    />
                }
            </div>                
                {showAllAdvices && 
                    <AdviceList 
                        advices={resultsFromApi.slips}
                        total__results={resultsFromApi.total_results}
                        query={resultsFromApi.query}
                    />
                }
        </section>
    )
}
export default FindAdvice