import companyBehanceSvg from '../../../../assets/MyCompanyBehance.svg'
import companyCodepenSvg from '../../../../assets/myCompanyCodepen.svg'
import companyTenziesSvg from '../../../../assets/myCompanyTenzies.svg'
import { createListOfCompanies, createPagesPosition } from '../../../../data/constants'
import styles from './style.module.css'

function Company(props) {
    const company = {
        svg: getCompanySvg(props.companyName),
        url: props.url,
        altText: props.altText
    }
    function getCompanySvg(companyName) {
        if(createListOfCompanies[createPagesPosition.first].svg.name === companyName) { return companyTenziesSvg }
        if(createListOfCompanies[createPagesPosition.second].svg.name === companyName) { return companyCodepenSvg }
        if(createListOfCompanies[createPagesPosition.third].svg.name === companyName) { return companyBehanceSvg }
        return ''
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