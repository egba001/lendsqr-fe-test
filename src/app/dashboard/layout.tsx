import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
        </>
    )
}
