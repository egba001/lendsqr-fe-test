import styles from '@/assets/styles/header.module.scss'
import Image from 'next/image'
import logo from '@/assets/image/icons/logo.svg'
import search from '@/assets/image/icons/search.svg'
import notification from '@/assets/image/icons/notification_main.svg'
import dropdown from '@/assets/image/icons/dropdown.svg'
import profileImage from '@/assets/image/profile-image.png'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '400'],
})

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <Image src={logo} alt="Lendsqr logo" width={150} height={30} />

                {/* search input */}
                <div className={styles.search_input_container}>
                    <input type="text" placeholder="Search for anything" />
                    <button type="button">
                        <Image
                            src={search}
                            alt="search"
                            width={15}
                            height={15}
                        />
                    </button>
                </div>

                <div className={styles.profile_section}>
                    <Link href="#" className={roboto.className}>
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

                    <div className={styles.profile_picture_container}>
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
            </div>
        </div>
    )
}
