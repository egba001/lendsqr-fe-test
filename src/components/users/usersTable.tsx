'use client'
import { useState, useRef, useEffect } from 'react'
import { formatDate } from '@/utils/dateFormat'
import TableHeader from './tableHeader'
import styles from '@/assets/styles/table.module.scss'
import StatusTag from './statusTag'
import Image from 'next/image'
import dotsIcon from '@/assets/image/icons/dots.svg'
import activate from '@/assets/image/icons/activate.svg'
import blacklist from '@/assets/image/icons/blacklist.svg'
import view from '@/assets/image/icons/view.svg'
import Pagination from '../ui/pagination'
import { useRouter } from 'next/navigation'
import { UsersInterface } from '@/interfaces/usersInterface'
import { Filters } from '../ui/filter'

interface UsersDetails {
    usersData: UsersInterface[]
}

export default function UsersTable({ usersData }: UsersDetails) {
    const [menuOnDisplay, setMenuOnDisplay] = useState<number | null>(null)
    const menuRef = useRef<HTMLUListElement | null>(null)

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemsPerPage, setItemsPerPage] = useState<number>(10)
    const [filteredUsers, setFilteredUsers] =
        useState<UsersInterface[]>(usersData)

    // function to filter users based on filters input
    const filterUsers = (filters: Filters) => {
        const filtered =
            usersData &&
            usersData.filter((user) => {
                return (
                    (filters.company
                        ? user.companyName.toLowerCase() ===
                          filters.company.toLowerCase()
                        : true) &&
                    (filters.username
                        ? user.userName.includes(filters.username)
                        : true) &&
                    (filters.email
                        ? user.email.includes(filters.email)
                        : true) &&
                    (filters.date
                        ? user.dateJoined.startsWith(filters.date)
                        : true) &&
                    (filters.phoneNumber
                        ? user.phoneNumber.includes(filters.phoneNumber)
                        : true) &&
                    (filters.employmentStatus
                        ? user.educationAndEmployment.employmentStatus ===
                          filters.employmentStatus
                        : true)
                )
            })
        console.log(filters)
        setCurrentPage(1)
        setFilteredUsers(filtered)
        setMenuOnDisplay(null)
    }

    // funcion to reset filters
    const resetFilters = () => {
        setFilteredUsers(usersData)
    }

    const router = useRouter()

    const totalPages = Math.ceil(usersData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentUsers = filteredUsers.slice(
        startIndex,
        startIndex + itemsPerPage
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const handleItemsPerPageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setItemsPerPage(Number(event.target.value))
        setCurrentPage(1)
    }

    const openModal = (id: number) => {
        setMenuOnDisplay((prevId) => (prevId === id ? null : id))
    }

    const closeModal = () => {
        setMenuOnDisplay(null)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            closeModal()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    if (!usersData) {
        return <p>Loading...</p>
    }
    if (!currentUsers) {
        return <p>No record found</p>
    }

    return (
        <>
            <div className={styles.table_container}>
                <table>
                    <thead>
                        <TableHeader
                            onFilter={filterUsers}
                            onResetAction={resetFilters}
                        />
                    </thead>
                    <tbody>
                        {currentUsers.map((data, id) => (
                            <tr key={id}>
                                <td>{data.companyName}</td>
                                <td>{data.userName}</td>
                                <td>{data.email}</td>
                                <td>{data.phoneNumber.slice(4)}</td>
                                <td>{formatDate(data.dateJoined)}</td>
                                <td>
                                    <StatusTag status={data.status} />
                                </td>
                                <td className={styles.user_details_container}>
                                    <div
                                        className={styles.action_menu}
                                        onClick={() => openModal(id)}
                                    >
                                        <Image
                                            src={dotsIcon}
                                            width={15}
                                            alt="User Actions"
                                        />
                                    </div>
                                    <ul
                                        ref={menuRef}
                                        className={styles.menu_options}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            display:
                                                menuOnDisplay === id
                                                    ? 'block'
                                                    : 'none',
                                        }}
                                    >
                                        <li>
                                            <span className={styles.action}>
                                                <Image
                                                    src={view}
                                                    width={15}
                                                    height={15}
                                                    alt="View user"
                                                />
                                                <span>View User</span>
                                            </span>
                                        </li>
                                        <li className={styles.action}>
                                            <Image
                                                src={activate}
                                                width={15}
                                                height={15}
                                                alt="Activate user"
                                            />
                                            <span>Activate User</span>
                                        </li>
                                        <li className={styles.action}>
                                            <Image
                                                src={blacklist}
                                                width={15}
                                                height={15}
                                                alt="Blacklist user"
                                            />
                                            <span>Blacklist User</span>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.pagination_section}>
                <div>
                    <span>Showing</span>
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                    >
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                    <span>out of {usersData.length}</span>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    )
}
