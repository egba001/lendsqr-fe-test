import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import styles from '@/assets/styles/dashboardLayout.module.scss'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />

            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </div>
        </>
    )
}
