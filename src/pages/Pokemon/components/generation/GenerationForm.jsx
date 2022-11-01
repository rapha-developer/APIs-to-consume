import Submit from '../../../../components/ui/submit/Submit';
import { createGenerationsToBuildForm } from '../../../../data/constants'
import styles from './style.module.css'

function GenerationForm(props) {
    const form = {
        label: props?.label || 'Find pokemon(s) by Generation',
        button__text: props?.button__text || 'Find'
    }
    async function handleSubmit(event) {
        event.preventDefault()
        const selectPosition = 0
        const idFromGeneration = event.target[selectPosition].value
        const url = `https://pokeapi.co/api/v2/generation/${idFromGeneration}/`
        await fetch(url)
        .then(res => res.json())
        .then(data => props.collectPokemon(data))
        .catch(error => alert(error))

        scrollDown()
    }
    function scrollDown() {
        const allHeightsNecessaryToScrollDown = [
            document.getElementById('hero-pokemon-id').clientHeight,
            document.getElementById('navbar-id').clientHeight,
        ];
        const allHeightsAdded = sumAllHeightsToMakeScrollDown(allHeightsNecessaryToScrollDown)
        const twoSeconds = 2000
        setTimeout(() => {
            window.scroll({
                top: allHeightsAdded,
                left: 0,
                behavior: 'smooth'
            });
        }, twoSeconds)
    }
    function sumAllHeightsToMakeScrollDown(heights) {
        const sumOfHeights = heights.reduce((accumulatorHeight, currentHeight) => {
            return accumulatorHeight + currentHeight
        });
        return sumOfHeights
    }
    const generations = createGenerationsToBuildForm

    const OptionsToBuildSelect = generations.map((generationItem, key) => {
        const fullUrl = generationItem.url 
        const regexPattern = /generation\/([0-9]?)/i
        const informationFound = fullUrl.match(regexPattern)
        const positionWithId = 1
        const idFound = informationFound[positionWithId]
        return (
            <option className={`capitalize ${styles.option}`}
                    key={key}
                    value={idFound}>{generationItem.name}</option>
        )
    })

	return (
		<form action=""
            onSubmit={handleSubmit}
            className={styles.form__full}>
			<div className={styles.select__field}>
				<label className={styles.select__label} htmlFor="generations">
					{form.label}
				</label>
				<div className={styles.form__field}>
					<select
						name="generations"
						className={styles.selectGeneration}
						id="generations" >
                        {OptionsToBuildSelect}
					</select>
					<Submit text={form.button__text} radius="square" />
				</div>
			</div>
		</form>
	);
}
export default GenerationForm;
