import { UsersInterface } from '@/interfaces/usersInterface'
import styles from '@/assets/styles/users.module.scss'
import MetricsCard from '@/components/ui/metricsCard'
import users_icon from '@/assets/image/icons/users_dashboard.svg'
import active_users from '@/assets/image/icons/active_users.svg'
import uloan from '@/assets/image/icons/uloan.svg'
import usavings from '@/assets/image/icons/usavings.svg'
import UsersTable from '@/components/usersTable'

export default async function UsersPage() {
    // function to fetch mock data from mocky endpoint
    const fetchUsersData = async (): Promise<UsersInterface[]> => {
        let data = await fetch(
            'https://run.mocky.io/v3/a8597810-24fb-40ea-b840-ce6f2c1e2f68'
        )
        let posts = await data.json()
        return posts
    }

    const users = await fetchUsersData()

    return (
        <div className={styles.container}>
            <h4 className={styles.heading}>Users</h4>

            <div className={styles.metrics_container}>
                <MetricsCard
                    icon={users_icon}
                    data="Users"
                    value={users.length}
                />
                <MetricsCard
                    icon={active_users}
                    data="Active Users"
                    value={users.length}
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

            <UsersTable usersData={users} />
        </div>
    )
}
