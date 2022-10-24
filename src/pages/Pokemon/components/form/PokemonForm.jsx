import { useState } from "react";
import Submit from "../../../../components/ui/submit/Submit";
import styles from './style.module.css'
function PokemonForm(props) {

    const inputForm = {
        id: 1,
        type: 'text',
        name: 'find-pokemon-species',
        placeholder: 'Write a name of pokemon to search on api',
        label_Text: 'Pokemon Specie'
    }
    const [formData, setFormData] = useState(generateFormData())
    function generateFormData() {
        const formInput = {}
        formInput[inputForm.name] = ''
        return formInput
    }
    
    const hero = {
        title: 'Search pokemon by name',
        description: "A espécie pode ser compartilhada por diferentes Pokemon's, como Pikachu ou Raichu, ambos chamados de Pokemon Mouse, encontrados na Pokedex"
    }
    function onChange(event) {
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
    function submitToApi(formData) {
        const pokemonName = formData[inputForm.name]
        if(pokemonName === '') {
            return;
        }
        const endpoint = buildEndPoint(pokemonName).endpoint
        const url = `https://pokeapi.co/api/v2/pokemon-species/${endpoint}`
        fetch(url)
            .then(res => res.json())
            .then(data => props.collectResults(data))
            .catch(error => props.collectError(error))
    }
    function buildEndPoint(pokemonName) {
        const regex = /\w+/g
        const onlyPokemonNames = pokemonName.match(regex)
        
        return {
            names: onlyPokemonNames,
            endpoint: onlyPokemonNames.join('-'),
            length: onlyPokemonNames.length
        }
    }
	return (
		<div className={styles.pokeForm}>
			<form action="" 
                className={styles.pokeForm__form} 
                onSubmit={handleSubmit}>
                <h4 className={`capitalize ${styles.pokeForm__title}`}>{hero.title}</h4>
                <p className={styles.pokeForm__description}>{hero.description}</p>
                <div className={styles.form__group}>
					<label htmlFor={inputForm.name}
                        className={styles.form__label}>
                        {inputForm.label_Text}
                    </label>
					<input
						type={inputForm.type}
                        id={inputForm.name}
                        name={inputForm.name}
						className={styles.form__input}
						placeholder={inputForm.placeholder}
                        onChange={(event) => onChange(event)}
                        value={formData[inputForm.name]}
					/>
				</div>
                <Submit 
                    text='Find pokemon'
                    radius='square'
                />
			</form>
		</div>
	);
}
export default PokemonForm;
