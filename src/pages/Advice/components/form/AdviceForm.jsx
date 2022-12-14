import { useState } from "react"
import Input from "../../../../components/ui/input/Input"
import Submit from "../../../../components/ui/submit/Submit"
import { createInputToFindAdvice } from '../../../../data/constants'

import styles from './style.module.css'
function AdviceForm(props) {
    
    function generateFormData() {
        const formDataNames = {}
        createInputToFindAdvice.forEach((formInput) => {
            formDataNames[formInput.name] = ''
        });
        return formDataNames;
    }
    const [formData, setFormData] = useState(generateFormData())
    const inputsToBuildForm = createInputToFindAdvice.map((inputItem, key) => {
        return (
            <Input 
                key={key}
                id={inputItem.name}
                name={inputItem.name}
                type={inputItem.type}
                placeholder={inputItem.placeholder}
                onChange={(event) => handleChange(event)}
                text={formData[inputItem.name]}
            />
        )
    });
    function handleChange(event) {
        const { name, type, value } = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }
    function handleSubmit(event) {
        event.preventDefault()
        submitToApi(formData)
    }

    async function submitToApi(formData) {
        const search = formData.searchByWord;
        if(search === '') {
            return;
        }
        const url = `https://api.adviceslip.com/advice/search/${search}`
        await fetch(url)
            .then(res => res.json())
            .then(data => props.collectResults(data))
            .catch(error => alert(error));
        scrollDown()
    }
    function scrollDown() {
        const allHeightsNecessaryToScrollDown = [
            document.getElementById('navbar-id').clientHeight,
            document.getElementById('home-hero-id').clientHeight,
            document.getElementById('random-advice-id').clientHeight,
            document.getElementById('advice-hero-form-id').clientHeight,
        ];
        const allHeightsAdded = sumAllHeightsToMakeScrollDown(allHeightsNecessaryToScrollDown)
        const halfSecond = 500
        setTimeout(() => {
            window.scroll({
                top: allHeightsAdded,
                left: 0,
                behavior: 'smooth'
            });
        }, halfSecond)
    }
    function sumAllHeightsToMakeScrollDown(heights) {
        const sumOfHeights = heights.reduce((accumulatorHeight, currentHeight) => {
            return accumulatorHeight + currentHeight
        });
        return sumOfHeights
    }
    return (
        <form action="#" 
            className={styles.advice__form}
            onSubmit={handleSubmit}>
            <div className={styles.form__group}>
                {inputsToBuildForm}
                <Submit text={props.button__text} />
            </div>
        </form>
    )
}
export default AdviceForm