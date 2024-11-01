import styles from '@/assets/styles/table.module.scss'
import left from '@/assets/image/icons/left.svg'
import right from '@/assets/image/icons/right.svg'
import Image from 'next/image'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePageChange = (page: number) => {
        onPageChange(page)
    }

    const getPaginationItems = () => {
        const items: (number | string)[] = []
        const maxPagesToShow = 5
        const halfMaxPages = Math.floor(maxPagesToShow / 2)

        let startPage = Math.max(1, currentPage - halfMaxPages)
        let endPage = Math.min(totalPages, currentPage + halfMaxPages)

        // Adjust the start page if there aren't enough pages before the current page
        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(1, endPage - (maxPagesToShow - 1))
        }

        // Always show the first page
        if (startPage > 1) {
            items.push(1)
            if (startPage > 2) {
                items.push('...') // Ellipsis before start
            }
        }

        // Fill in the pages
        for (let i = startPage; i <= endPage; i++) {
            items.push(i)
        }

        // Always show the last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                items.push('...') // Ellipsis after end
            }
            items.push(totalPages)
        }

        return items
    }

    return (
        <div className={styles.pagination_container}>
            <button
                className={styles.main_button}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Image src={left} alt="previous" width={10} height={10} />
            </button>
            {getPaginationItems().map((item, index) => (
                <div
                    key={index}
                    onClick={() =>
                        typeof item === 'number' && handlePageChange(item)
                    }
                    className={currentPage === item ? styles.active : ''}
                    style={{ margin: '0 5px' }}
                >
                    <span>{item}</span>
                </div>
            ))}
            <button
                className={styles.main_button}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <Image src={right} alt="previous" width={10} height={10} />
            </button>
        </div>
    )
}

export default Pagination
