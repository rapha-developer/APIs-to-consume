import styles from './style.module.css'

function Company(props) {
    const company = {
        svg: props.companySvg,
        url: props.url,
        altText: props.altText
    }

    return (
        <a href={company.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="company__link">
            <img src={company.svg} 
                alt={company.altText}
                className={styles.company__logo} />
        </a>
    )
}
export default Company