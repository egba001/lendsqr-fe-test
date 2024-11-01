'use client'
import { tableHeaders } from '@/utils/constants'
import filter from '@/assets/image/icons/filter-results-button.svg'
import Image from 'next/image'
import styles from '@/assets/styles/table.module.scss'
import { useEffect, useRef, useState } from 'react'

const TableHeader = () => {
    const [filterToggle, setFilterToggle] = useState<boolean>(false)
    const [activeHeader, setActiveHeader] = useState<number | null>(null)
    const modalRef = useRef<HTMLTableRowElement>(null) // Ref for the modal

    const closeModal = (): void => {
        setFilterToggle(false)
        setActiveHeader(null)
    }

    const openModal = (id: number): void => {
        if (activeHeader === id) {
            closeModal() // Close if the same header is clicked
        } else {
            setActiveHeader(id)
            setFilterToggle(true)
        }
    }

    const handleOutsideClick = (event: MouseEvent): void => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            closeModal()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    return (
        <>
            <tr>
                {tableHeaders.map((header) => (
                    <th key={header.id}>
                        <span className={styles.title}>{header.title}</span>
                        <span
                            className={styles.filter}
                            onClick={() => openModal(header.id)}
                        >
                            <Image
                                src={filter}
                                height={12}
                                width={12}
                                alt={`${header.title} filter`}
                            />
                        </span>
                    </th>
                ))}
            </tr>
        </>
    )
}

export default TableHeader
