import { useState } from "react"
import { findAdviceData } from '../../../data/constants'

import ListAdvice from "../components/list/ListAdvice"
import SearchAdvice from "../components/search/SearchAdvice"
import NotFoundAdvice from "../components/error/notFoundAdvice"

import styles from './style.module.css'

function FindAdvice() {
    const [resultsFromApi, setResultsFromApi] = useState([])
    const [showListAdvice, setShowListAdvice] = useState(false)
    const [showAnyAdvices, setShowAnyAdvices] = useState(false)
    const collectResults = (response) => {
        setResultsFromApi(response)
    }
    const keyWordToNotFoundAdvice = "message"
    const keyWordToListAdvices = "slips"
    const keysFromResponseApi = Object.keys(resultsFromApi)
    
    const showNotFoundAdvices = keysFromResponseApi.includes(keyWordToNotFoundAdvice)
    const showAllAdvices = keysFromResponseApi.includes(keyWordToListAdvices)

    return (
        <section className={styles.findAdvice}>
            <div className="container">
                <h2 className={styles.findAdvice__title}>{findAdviceData.title}</h2>
                <SearchAdvice 
                    header={findAdviceData.header}
                    collectResults={collectResults}
                />
                {showNotFoundAdvices && <NotFoundAdvice  
                                        message={resultsFromApi[keyWordToNotFoundAdvice].text}
                                        /> }
                {showAllAdvices && <ListAdvice advices={resultsFromApi} />}
            </div>
        </section>
    )
}
export default FindAdvice