'use client'
import { useState } from 'react'
import { formatDate } from '@/utils/dateFormat'
import TableHeader from './tableHeader'
import styles from '@/assets/styles/table.module.scss'
import StatusTag from './ui/statusTag'
import Image from 'next/image'
import dotsIcon from '@/assets/image/icons/dots.svg' // Path to your three dots icon

interface UsersDetails {
    usersData: {
        companyName: string
        dateJoined: string
        email: string
        phoneNumber: string
        status: string
        userName: string
    }[]
}

export default function UsersTable({ usersData }: UsersDetails) {
    const [actionMenuOpen, setActionMenuOpen] = useState<number | null>(null) // Track which menu is open

    const handleUserAction = (action: string, userId: number) => {
        // Perform actions based on the selected option
        if (action === 'blacklist') {
            console.log(`Blacklisting user ${userId}`)
        } else if (action === 'activate') {
            console.log(`Activating user ${userId}`)
        } else if (action === 'view') {
            console.log(`Viewing account for user ${userId}`)
        }
        setActionMenuOpen(null) // Close menu after action
    }

    const toggleActionMenu = (id: number) => {
        setActionMenuOpen(actionMenuOpen === id ? null : id) // Toggle menu for the specific user
    }

    if (!usersData) {
        return <p>Loading...</p>
    }

    // if (filteredUsers.length === 0) {
    //     return <p>No users found.</p>;
    // }

    return (
        <div className={styles.table_container}>
            <table>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {usersData.map((data, id) => (
                        <tr key={id}>
                            <td>{data.companyName}</td>
                            <td>{data.userName}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneNumber.slice(4)}</td>
                            <td>{formatDate(data.dateJoined)}</td>
                            <td>
                                <StatusTag status={data.status} />
                            </td>
                            <td>
                                <div className={styles.actionMenu}>
                                    <Image
                                        src={dotsIcon}
                                        alt="User Actions"
                                        onClick={() => toggleActionMenu(id)} // Toggle the action menu
                                    />
                                    {actionMenuOpen === id && ( // Show menu if this row is active
                                        <div className={styles.menuOptions}>
                                            {data.status === 'inactive' && (
                                                <button
                                                    onClick={() =>
                                                        handleUserAction(
                                                            'activate',
                                                            id
                                                        )
                                                    }
                                                >
                                                    Activate User
                                                </button>
                                            )}
                                            {data.status === 'active' && (
                                                <button
                                                    onClick={() =>
                                                        handleUserAction(
                                                            'blacklist',
                                                            id
                                                        )
                                                    }
                                                >
                                                    Blacklist User
                                                </button>
                                            )}
                                            <button
                                                onClick={() =>
                                                    handleUserAction('view', id)
                                                }
                                            >
                                                View Account
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
