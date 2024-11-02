'use client'
import Header from '@/components/common/header'
import Sidebar from '@/components/common/sidebar'
import styles from '@/assets/styles/dashboardLayout.module.scss'
import { useState } from 'react'
import MobileSidebar from '@/components/common/mobileSidebar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Handle state for disply of mobile sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <>
            <Header />

            <div className={styles.container}>
                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className={styles.overlay}
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}

                <Sidebar />
                <MobileSidebar
                    isOpen={isSidebarOpen}
                    onCloseAction={() => setIsSidebarOpen(false)}
                />
                <div className={styles.content}>
                    <button
                        onClick={toggleSidebar}
                        className={`${styles.toggle_button} ${isSidebarOpen ? styles.open : ''}`}
                    >
                        {!isSidebarOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M5.7 3.7l3.6 4.3-3.6 4.3L7 14.7 11.3 8 7 3.3 5.7 4.7z"
                                    fill="white"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M10.3 12.3L6.7 8l3.6-4.3L8 2.3 3.7 8 8 13.7l2.3-1.4z"
                                    fill="white"
                                />
                            </svg>
                        )}
                    </button>
                    {children}
                </div>
            </div>
        </>
    )
}
