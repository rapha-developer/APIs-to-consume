import styles from './style.module.css'

function FlashAdvice(props) {
    
    const flash = {
        id: props.advice?.slip.id,
        title: props.title,
        advice:  props.advice?.slip.advice,
    }
	return (
		<div className={styles.flashCard}>
			<div className={styles.flashCard__head}>
				<h4 className={styles.flashCard__title}>{flash.title}</h4>
			</div>
			<div className={styles.flashCard__content}>
				<p className={styles.flashCard__message}>"{flash.advice}"</p>
			</div>
            <span className={styles.flashCard__id}>{flash.id}</span>
		</div>
	);
}
export default FlashAdvice;
