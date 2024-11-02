'use client'
import styles from '@/assets/styles/header.module.scss'
import Image from 'next/image'
import logo from '@/assets/image/icons/logo.svg'
import notification from '@/assets/image/icons/notification_main.svg'
import dropdown from '@/assets/image/icons/dropdown.svg'
import profileImage from '@/assets/image/profile-image.png'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { useState } from 'react'
import MobileMenu from './mobileMenu'
import SearchInput from './searchInput'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '400'],
})

export default function Header() {
    // State to control the display of mobile menu
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState)
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <Image src={logo} alt="Lendsqr logo" width={150} height={30} />

                {/* search input */}
                <div className={styles.input_container}>
                    <SearchInput />
                </div>

                <div className={styles.profile_section}>
                    <Link
                        href="#"
                        className={`${roboto.className} ${styles.link}`}
                    >
                        Docs
                    </Link>

                    <button>
                        <Image
                            src={notification}
                            alt="notification"
                            width={20}
                            height={20}
                        />
                    </button>

                    <div
                        onClick={toggleMenu}
                        className={styles.profile_picture_container}
                    >
                        <Image
                            src={profileImage}
                            alt="Profile image"
                            width={90}
                            height={90}
                            className={styles.profile_image}
                        />
                    </div>

                    <div className={styles.profile_name}>
                        <p>Adedeji</p>
                        <span>
                            <Image
                                src={dropdown}
                                alt="drop down icon"
                                width={20}
                                height={20}
                            />
                        </span>
                    </div>
                </div>
                {/* Mobile menu */}
                <MobileMenu
                    isOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                />
            </div>
        </div>
    )
}
