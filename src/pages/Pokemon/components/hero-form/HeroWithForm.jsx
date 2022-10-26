
import { createItemsToBuildMapOfOptions } from '../../../../data/constants'
import ItemsForm from "./components/form/ItemsForm";
import styles from "./style.module.css";
function HeroWithForm(props) {
    const HeroForm = {
        title: props?.title || 'Not found title in props',
        description: props?.description || 'Not found description in props',
        type:  props?.type || 'medicine',
        options: collectItemsToBuildOptions(props?.type || 'medicine')
    }
    function collectItemsToBuildOptions(nameType) {
        const mapOfOptions = createItemsToBuildMapOfOptions
        const typeFound = mapOfOptions.find((item) => nameType === item.type)
        return typeFound.options
    }
	return (
		<div className={styles.heroWithForm}>
			<h1 className={styles.heroWithForm__title}>{HeroForm.title}</h1>
			<p className={styles.heroWithForm__description}>
				{HeroForm.description}
			</p>
			<ItemsForm 
                type={HeroForm.type}
                options={HeroForm.options}
                collectItems={props.collectResponse} 
                collectErrors={props.collectErrors}
            />
		</div>
	);
}
export default HeroWithForm;
