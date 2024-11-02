// src/app/users/UsersPageContent.tsx
'use client'
import styles from '@/assets/styles/users.module.scss'
import MetricsCard from '@/components/users/metricsCard'
import users_icon from '@/assets/image/icons/users_dashboard.svg'
import active_users from '@/assets/image/icons/active_users.svg'
import uloan from '@/assets/image/icons/uloan.svg'
import usavings from '@/assets/image/icons/usavings.svg'
import UsersTable from '@/components/users/usersTable'
import { useUsersContext } from '@/contexts/usersDataContext'

const UsersPageContent = () => {
    const { usersData, loading, setUsersData } = useUsersContext()

    const activeUsers =
        usersData && usersData.filter((data) => data.status === 'active').length

    if (loading) {
        return <div className={styles.container}>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <h4 className={styles.heading}>Users</h4>

            <div className={styles.metrics_container}>
                <MetricsCard
                    icon={users_icon}
                    data="Users"
                    value={usersData.length}
                />
                <MetricsCard
                    icon={active_users}
                    data="Active Users"
                    value={activeUsers}
                />
                <MetricsCard
                    icon={uloan}
                    data="Users with loan"
                    value={12453}
                />
                <MetricsCard
                    icon={usavings}
                    data="Users with savings"
                    value={102453}
                />
            </div>

            <UsersTable
                usersData={usersData}
                setUsersDataAction={setUsersData}
            />
        </div>
    )
}

export default UsersPageContent
