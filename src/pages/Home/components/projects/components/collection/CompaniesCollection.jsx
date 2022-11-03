
import Company from '../../../Company/Company'
import styles from './style.module.css'
function CompaniesCollection(props) {
    const companies = {
        items: props?.items || []
    }
    const company__items = companies.items.map((companyItem, key) => {
        return (
            <Company 
                key={key}
                companyName={companyItem.name}
                altText={companyItem.altText}
                url={companyItem.url}
            />
        )
    })
    return (
        <div className={`MyProjects__col ${styles.companies__collection}`}>
            {company__items}
        </div>
    )
}
export default CompaniesCollection