import error from '../../../../assets/error.svg'
import styles from './style.module.css'

function NotFoundAdvices(props) {
    const notFoundData = {
        message: props?.message || 'No advice slips found matching that search term.',
        messageInPortuguese: props?.description || 'Não foram encontrados conselhos que correspondam a esse termo de pesquisa',
    }
	return (
		<div className={styles.notFoundAdvice__wrapper}>
			<img
				src={error}
				className={styles.notFoundAdvice__icon}
				alt="Icon which symbolize error 404 (Not found)"
			/>
			<h3 className={styles.notFoundAdvice__title}>{notFoundData.message}</h3>
			<h6 className={styles.notFoundAdvice__description}>{notFoundData.messageInPortuguese}</h6>
		</div>
	);
}
export default NotFoundAdvices
