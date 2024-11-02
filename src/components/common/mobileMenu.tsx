import styles from '@/assets/styles/mobileMenu.module.scss'
import SearchInput from './searchInput'
import { Roboto } from 'next/font/google'
import Link from 'next/link'

interface MobileMenuProps {
    isOpen: boolean // Prop to control menu visibility
    onClose: () => void // Callback to close the menu
}

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '400'],
})

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`${styles.menu_container} ${isOpen ? styles.open : styles.closed}`}
        >
            <div className={styles.menu}>
                <SearchInput />
                <Link href="#" className={`${roboto.className} ${styles.link}`}>
                    Docs
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu
