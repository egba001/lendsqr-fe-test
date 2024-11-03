'use client'
import Image from 'next/image'
import briefcase from '@/assets/image/icons/briefcase.svg'
import home from '@/assets/image/icons/home.svg'
import arrowDown from '@/assets/image/icons/arrow_down.svg'
import logout from '@/assets/image/icons/logout.svg'
import {
    customersNavigations,
    businessesNavigation,
    settingsNavigation,
} from '@/utils/constants'
import Link from 'next/link'
import styles from '@/assets/styles/sidebar.module.scss'
import { usePathname, useRouter } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname()

    const router = useRouter()

    return (
        <aside className={styles.sidebar}>
            <div>
                <button className={`${styles.nav_button} ${styles.switch}`}>
                    <Image src={briefcase} alt="briefcase" />
                    <span>Switch Organization</span>
                    <Image src={arrowDown} alt="arrow down" />
                </button>

                <Link href="/dashboard/#" className={styles.link}>
                    <span className={styles.nav_button}>
                        <Image src={home} alt="home" />
                        <span>Dashboard</span>
                    </span>
                </Link>

                {/* Cutomers Navigation Menu */}
                <p className={styles.nav_heading}>Customers</p>
                <ul className={styles.sidebar_navigation}>
                    {customersNavigations.map((nav, id) => (
                        <li key={id}>
                            <Link href={nav.route} className={styles.link}>
                                <div
                                    className={`${styles.nav_route} ${pathname === nav.route ? styles.active : null}`}
                                >
                                    <Image
                                        src={nav.icon}
                                        alt={nav.title}
                                        height={18}
                                        width={18}
                                    />
                                    <p className={styles.nav_title}>
                                        {nav.title}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Businesses Navigation Menu */}
                <p className={styles.nav_heading}>Businesses</p>
                <ul className={styles.sidebar_navigation}>
                    {businessesNavigation.map((nav, id) => (
                        <li key={id}>
                            <Link href={nav.route} className={styles.link}>
                                <div className={styles.nav_route}>
                                    <Image
                                        src={nav.icon}
                                        alt={nav.title}
                                        height={18}
                                        width={18}
                                    />
                                    <p className={styles.nav_title}>
                                        {nav.title}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Settings Navigation Menu */}
                <p className={styles.nav_heading}>Settings</p>
                <ul className={styles.sidebar_navigation}>
                    {settingsNavigation.map((nav, id) => (
                        <li key={id}>
                            <Link href={nav.route} className={styles.link}>
                                <div className={styles.nav_route}>
                                    <Image
                                        src={nav.icon}
                                        alt={nav.title}
                                        height={18}
                                        width={18}
                                    />
                                    <p className={styles.nav_title}>
                                        {nav.title}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.logout}>
                    <button
                        onClick={() => router.push('/')}
                        className={styles.nav_button}
                    >
                        <Image
                            src={logout}
                            alt="signout"
                            height={18}
                            width={18}
                        />
                        <span>Logout</span>
                    </button>
                    <p>v12.0</p>
                </div>
            </div>
        </aside>
    )
}
