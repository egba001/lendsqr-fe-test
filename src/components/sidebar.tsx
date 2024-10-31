import Image from 'next/image'
import briefcase from '@/assets/image/icons/briefcase.svg'
import arrowDown from '@/assets/image/icons/arrow_down.svg'
import {
    customersNavigations,
    businessesNavigation,
    settingsNavigation,
} from '@/utils/constants'
import Link from 'next/link'
import styles from '@/assets/styles/sidebar.module.scss'

export default function Sidebar() {
    return (
        <aside>
            <div>
                <button>
                    <Image src={briefcase} alt="briefcase" />
                    <span>Switch Organization</span>
                    <Image src={arrowDown} alt="arrow down" />
                </button>

                <button>
                    <Image src={briefcase} alt="briefcase" />
                    <span>Dashboard</span>
                </button>

                {/* Cutomers Navigation Menu */}
                <p className="nav-heading">Customers</p>
                <ul className={styles.sidebar_navigation}>
                    {customersNavigations.map((nav, id) => (
                        <li key={id}>
                            <Link href="/">{nav.title}</Link>
                        </li>
                    ))}
                </ul>

                {/* Businesses Navigation Menu */}
                <p className="nav-heading">Businesses</p>
                <ul className={styles.sidebar_navigation}>
                    {businessesNavigation.map((nav, id) => (
                        <li key={id}>
                            <Link href="/">{nav.title}</Link>
                        </li>
                    ))}
                </ul>

                {/* Settings Navigation Menu */}
                <p className="nav-heading">Businesses</p>
                <ul className={styles.sidebar_navigation}>
                    {settingsNavigation.map((nav, id) => (
                        <li key={id}>
                            <Link href="/">{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
