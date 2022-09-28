import logo from '../../assets/logo-min.svg'
import styles from './style.module.css'

function Footer() {
    const footerItems = [
        {
            title: 'What We Do',
            items: [
                {
                    label: 'Web Design',
                    url: '#'
                },
                {
                    label: 'App Design',
                    url: '#'
                },
                {
                    label: 'Social Media Manage',
                    url: '#'
                },
                {
                    label: 'Market Analysis Project',
                    url: '#'
                }
            ]
        },
        {
            title: 'Company',
            items: [
                {
                    label: 'About Us',
                    url: '#'
                },
                {
                    label: 'Career',
                    url: '#'
                },
                {
                    label: 'Become Investor',
                    url: '#'
                }
            ]
        },
        {
            title: 'Support',
            items: [
                {
                    label: 'FAQ',
                    url: '#'
                },
                {
                    label: 'Policy',
                    url: '#'
                },
                {
                    label: 'Business',
                    url: '#'
                }
            ]
        },
        {
            title: 'Contact',
            items: [
                {
                    label: 'WhatsApp',
                    url: '#'
                },
                {
                    label: 'Support 24',
                    url: '#'
                }
            ]
        }
    ]
    const footerMenus = footerItems.map((footerItem, key) => {
        return (
            <div className={styles.footer__group} key={key}>
                <h5 className={styles.footer__groupTitle}>{footerItem.title}</h5>
                <ul className={styles.footer__groupList}>
                    {footerItem.items.map((footerOption, keyOption) => {
                        return (
                            <li className={styles.footer__item} key={keyOption}>
                                <a href={footerOption.url} 
                                    className={styles.footer__link}>{footerOption.label}</a>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    });

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__line}`}>
                <div className={styles.__row}>
                    <div className={styles.__firstColumn}>
                        <img src={logo}
                            className='logo' 
                            alt="" />
                        <h6 className={styles.footer__description}>Leading digital agency with solid design and development expertise. We build ready made websites, mobile applications, and elaborate online business services.</h6>
                    </div>
                    <div className={styles.__footerColumns}>
                        {footerMenus}
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer