
import Submit from '../../../../../../components/ui/submit/Submit'
import ItemOption from '../option/ItemOption'
import styles from './style.module.css'
function ItemsForm(props) {
    const form = {
        options: props?.options || [],
        typeOfItems: props?.type || 'stone',
        selectName: generateNameToSelect(props?.type || 'stone'),
        label: props?.label || 'Find Poke items by category',
        button__text: props?.button__text || 'Find'
    }
    function generateNameToSelect(typeOfName) {
        return 'items-' + typeOfName
    }
    const optionsToBuildSelect = form.options.map((item, key) => {
        return (
            <ItemOption 
                key={key}
                name={item.name}
                url={item.url}
            />
        )
    })
    function handleSubmit(event) {
        event.preventDefault()
        const positionOfSelect = 0
        const { name, type, value } = event.target[positionOfSelect] 
        fetch(value)
            .then(res => res.json())
            .then(data => props.collectItems(data))
            .catch(error => props.collectErrors(error))

        scrollDown()
    }

    function scrollDown() {
        const allHeightsNecessaryToScrollDown = [
            document.getElementById('explore-item-id').clientHeight,
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
    return (
        <form action=""
            onSubmit={handleSubmit}
            className={styles.form__full}>
            <div className={styles.select__field}>
                <label className={styles.select__label} htmlFor={form.selectName}>
                    {form.label}
                </label>
                <div className={styles.form__field}>
					<select
						name={form.selectName}
						className={styles.selectItem}
						id={form.selectName} >
                            {optionsToBuildSelect}
					</select>
					<Submit text={form.button__text} radius="square" />
				</div>
            </div>
        </form>
    )
}
export default ItemsForm