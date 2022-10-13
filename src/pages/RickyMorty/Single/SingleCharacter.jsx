import { useState } from 'react';
import IllustrationEducation from '../../../assets/Draw-kit-Illustrations-Education.svg'
import rectangleWithCurveSvg from '../../../assets/homeRectangleWithCurve.svg'
import RickSingleForm from '../components/singleForm/RickSingleForm';
import RickSingleHero from '../components/singleHero/RickSingleHero';
import RickSingleProfile from '../components/singleProfile/RickSingleProfile';

import styles from './style.module.css'
function SingleCharacter() {
    const [resultsFromApi, setResultsFromApi] = useState({})
    const collectCharacters = (response) => {
        setResultsFromApi(response)
    }
    const sizeOfObjectKeys = getSizeFromObjectKeys()
    const IsEmptyResultsFromApi = (sizeOfObjectKeys === 0) ? true : false
    function getSizeFromObjectKeys() {
        return Object.keys(resultsFromApi).length
    }
    
    return (
        <section className={styles.singleCharacter}>
            <div className="container">
                <div className={styles.__row}>
                    <div className={styles.__columnHero}>
                        <img src={rectangleWithCurveSvg}
                            className={styles.bgRectangleWithCurve}
                            alt='Background forms: rectangle with curve' 
                        />
                        <RickSingleHero />
                        <RickSingleForm
                            collectCharacters={collectCharacters}
                            button__text='Find Character'
                        />
                    </div>
                    <div className={styles.__col}>
                        {IsEmptyResultsFromApi &&
                            <img src={IllustrationEducation}
                            className={styles.bgIllustration}
                            alt='Illustration with man with a notebook on the table' />
                        }
                        {!IsEmptyResultsFromApi && 
                            <RickSingleProfile 
                                id={resultsFromApi.id}
                                image={resultsFromApi.image}
                                name={resultsFromApi.name}
                                species={resultsFromApi.species}
                                status={resultsFromApi.status}
                                gender={resultsFromApi.gender}
                                location={resultsFromApi.location}
                                origin={resultsFromApi.origin}
                                url={resultsFromApi.url}
                                episode={resultsFromApi.episode}
                            />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SingleCharacter