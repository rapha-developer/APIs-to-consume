import styles from './style.module.css'

function RandomAdvice() {
	const card = {
		title: "“Retention is key for a good growth marketing strategy”",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius turpis dolor adipiscing suscipit nibh ipsum accumsan.",
	};
	const cardApi = {
		subtitle: "About the eBook",
		title: "Our eBook includes 100+ pages on email marketing",
		description:
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco mere laboris nisi ut aliquip ex ea commodo conse.",
		stats: {
			number: 10,
			signal: "+",
			label: "pages",
		},
		button: "Download eBook",
	};
	return (
        <section className={styles.sectionCard}>
            <div className="container">
            <div className={styles.card__row}>
                <div className="card__col">
                    <div className={styles.card}>
                        <div className={styles.card__head}>
                            <h4 className={styles.card__title}>{card.title}</h4>
                        </div>
                        <div className={styles.card__content}>
                            <p className={styles.card__message}>"{card.description}"</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.cardApi__columnInfo} card__col`}>
                    <div className={styles.cardApi__wrapper} >
                        <h5 className={`${styles.cardApi__subtitle} uppercase`}>{cardApi.subtitle}</h5>
                        <h2 className={styles.cardApi__title}>{cardApi.title}</h2>
                        <p className={styles.cardApi__desc}>{cardApi.description}</p>
                        <h6 className={styles.cardApi__stat}>{cardApi.stats.number}<span>{cardApi.stats.signal}</span></h6>
                        <p className={styles.cardApi__label}>{cardApi.stats.label}</p>
                        <a href="#"
                            className={styles.cardApi__button}>{cardApi.button}</a>
                    </div>
                </div>
            </div>
            </div>
        </section>
	);
}
export default RandomAdvice;
