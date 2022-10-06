import { useState } from 'react'
import Input from '../../../../components/ui/input/Input'
import Submit from '../../../../components/ui/submit/Submit'
import { createInputToFindCharacter } from '../../../../data/constants'
import styles from './style.module.css'

function RickForm(props) {

    function generateFormData() {
        const formDataNames = {}
        createInputToFindCharacter.map((formInput) => {
            formDataNames[formInput.name] = ''
        });
        return formDataNames;
    }
    const [formData, setFormData] = useState(generateFormData())
    const inputsToBuildForm = createInputToFindCharacter.map((inputItem, key) => {
        return (
            <Input
                key={key}
                id={inputItem.name}
                name={inputItem.name}
                placeholder={inputItem.placeholder}
                onChange={(event) => handleChange(event)}
                text={formData[inputItem.name]}
            />
        )
    })
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevForm) => {
            return {
                ...prevForm,
                [name]: value
            }
        });
    }
    function handleSubmit(event) {
        event.preventDefault()
        submitToApi(formData)
    }
    async function submitToApi(formData) {
        const name = formData.searchCharacterByName
        if (name === '') {
            return ;
        }
        const url = `https://rickandmortyapi.com/api/character/?name=${name}`
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
export default RickForm