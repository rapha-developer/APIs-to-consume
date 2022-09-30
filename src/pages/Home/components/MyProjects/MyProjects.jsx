import companyBehanceSvg from '../../../../assets/myCompanyBehance.svg' 
import companyTenziesSvg from '../../../../assets/myCompanyTenzies.svg'
import companyCodepenSvg from '../../../../assets/myCompanyCodepen.svg'
import Company from '../Company/Company'
import styles from './style.module.css'

import { createMyProjectTitle, createListOfCompanies } from '../../../../data/constants'

function MyProjects() {
    const projectsData = createMyProjectTitle
    const companies = createListOfCompanies.map((companyItem) => {
        let companySvg = ''
        if (companyItem.svg === createListOfCompanies[0].svg) { companySvg = companyTenziesSvg } 
        if (companyItem.svg === createListOfCompanies[1].svg) { companySvg = companyCodepenSvg } 
        if (companyItem.svg === createListOfCompanies[2].svg) { companySvg = companyBehanceSvg } 
        return {
            ...companyItem,
            svg: companySvg
        }
    });
    const company__items = companies.map((companyItem, key) => {
        return (
            <Company key={key}
                companySvg={companyItem.svg}
                url={companyItem.url}
                altText={companyItem.altText}
            />
        )
    });
    return (
        <section className={styles.MyProjects}>
            <div className="container">
                <div className={styles.MyProjects__row}>
                    <div className={`MyProjects__col ${styles.MyProjects__preface}`}>
                        <h2 className={styles.MyProjects__title}>{projectsData.title}</h2>
                        <p className={styles.MyProjects__description}>{projectsData.description}</p>
                    </div>
                    <div className={`${styles.MyProjects__col} ${styles.MyProjects__companies}`}>
                        {company__items}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MyProjects