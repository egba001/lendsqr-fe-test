import Image from 'next/image'
import search from '@/assets/image/icons/search.svg'
import styles from '@/assets/styles/searchInput.module.scss'

export default function SearchInput() {
    return (
        <div className={styles.search_input_container}>
            <input type="text" placeholder="Search for anything" />
            <button type="button">
                <Image src={search} alt="search" width={15} height={15} />
            </button>
        </div>
    )
}
