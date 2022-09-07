import { useState } from 'react'
import FormInput from '../../../../components/form/input/FormInput'
import numberOneSvg from '../../../../assets/number_1.svg'
import Button from '../../../../components/ui/Button/Button'
import styles from './style.module.css'
import { formInputs } from '../../../../data/constants'

function SearchAdvice(props) {

    function generateFormData() {
        const formDataNames = {}
        formInputs.forEach((formInput) => {
            formDataNames[formInput.name] = ""
        });
        return formDataNames;
    }
    const [formData, setFormData] = useState(generateFormData());
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
    const [resultsFromApi, setResultsFromApi] = useState([])
    async function submitToApi(formData) {
        const search = formData.searchByWord
        if(search === '') {
            return;
        }
        const url = `https://api.adviceslip.com/advice/search/${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => props.collectResults(data))
            .catch(error => alert(error))
    }

    const form__fields = formInputs.map((formInput)  => {
        return (
            <FormInput 
                key={formInput.id}
                id={formInput.id}
                name={formInput.name}
                type={formInput.type}
                placeholder={formInput.placeholder}
                label={formInput.label}
                onChange={(event) => handleChange(event)}
                text={formData[formInput.name]}
            />
        )
    });

    return (
        <form action="#" 
            className={styles.form__full}
            onSubmit={handleSubmit}>
            <div className={styles.form__head}>
                <img src={numberOneSvg}
                    className={styles.form__iconTitle} 
                    alt="Number One" />
                <h4 className={styles.form__header}>{props.header}</h4>
            </div>
            <hr className={styles.form__line} />
            <div className={styles.form__body}>
                {form__fields}
            </div>
            <Button type="submit" text="search" />
        </form>
    )
}
export default SearchAdvice