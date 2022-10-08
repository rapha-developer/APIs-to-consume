import { useState } from "react"
import InputNumber from "../../../../components/ui/inputNum/InputNumber";
import Submit from "../../../../components/ui/submit/Submit";
import { createInputToGetSingleCharacter } from '../../../../data/constants'

import styles from './style.module.css'
function RickSingleForm(props) {
    function generateFormData() {
        const formDataNames = {}
        createInputToGetSingleCharacter.map((inputItem) => {
            formDataNames[inputItem.name] = 1
        });
        return formDataNames;
    }
    const [formData, setFormData] = useState(generateFormData())
    const inputsToBuildForm = createInputToGetSingleCharacter.map((inputItem, key) => {
        return (
            <InputNumber 
                key={key}
                id={inputItem.name}
                name={inputItem.name}
                placeholder={inputItem.placeholder}
                minimumValue={inputItem.minimumValue}
                maximumValue={inputItem.maximumValue}
                onChange={(event) => handleChange(event)}
                text={formData[inputItem.name]}
            />
        )
    });
    function handleChange(event) {
        const { name, type, min, max, value } = event.target

        let valueInNumber = parseInt(value)
        const maxInNumber = parseInt(max)
        const minInNumber = parseInt(min)

        if (valueInNumber < minInNumber) { valueInNumber = minInNumber }
        if (valueInNumber > maxInNumber) { valueInNumber = maxInNumber }

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: valueInNumber
            }
        });
    }
    function handleSubmit(event) {
        event.preventDefault()
        submitToApi(formData)
    }
    async function submitToApi(formData) {
        const numberSearch = formData.searchCharacterByID
        if (numberSearch === '') {
            return ;
        }
        const url = `https://rickandmortyapi.com/api/character/${numberSearch}`
        await fetch(url)
            .then(res => res.json())
            .then(data => props.collectCharacters(data))
            .catch(error => alert(error))
    }
    return (
        <form action="#"
            onSubmit={handleSubmit}
            className={styles.subscribe__form}>
            <div className={styles.form__group}>
                {inputsToBuildForm}
                <Submit text={props.button__text} />
            </div>
        </form>
    )
}
export default RickSingleForm