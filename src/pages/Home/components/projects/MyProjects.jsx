
import companyBehanceSvg from '../../../../assets/MyCompanyBehance.svg'
import companyCodepenSvg from '../../../../assets/myCompanyCodepen.svg'
import companyTenziesSvg from '../../../../assets/myCompanyTenzies.svg'

import { createMyProjectTitle, createListOfCompanies } from '../../../../data/constants'
import CompaniesCollection from './components/collection/CompaniesCollection'
import ProjectsPreface from './components/preface/ProjectsPreface'
import styles from './style.module.css'
function MyProjects() {
    const allAssetsUrls = [companyBehanceSvg, companyCodepenSvg, companyTenziesSvg]
    const companies = createListOfCompanies.map((companyItem) => {
        const foundSvg = allAssetsUrls.filter((assetsUrl) => (assetsUrl === companyItem.svg.url))
        return {
            svg: foundSvg,
            url: companyItem.url,
            altText: companyItem.svg.altText
        }
    });
    return (
        <section className={styles.MyProjects}>
            <div className="container">
                <div className={styles.MyProjects__row}>
                    <ProjectsPreface 
                        title={createMyProjectTitle.title}
                        description={createMyProjectTitle.description}
                    />
                    <CompaniesCollection items={companies} />
                </div>
            </div>
        </section>
    )
}
export default MyProjects