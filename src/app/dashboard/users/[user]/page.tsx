'use client'
import { useUsersContext } from '@/contexts/usersDataContext'
import styles from '@/assets/styles/userDetails.module.scss'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import previous from '@/assets/image/icons/previous.svg'
import avatar from '@/assets/image/icons/avatar.svg'
import star1 from '@/assets/image/icons/star_on.svg'
import star2 from '@/assets/image/icons/star_off.svg'
import Image from 'next/image'
import GeneralDetails from '@/components/userDetails/generalDetails'
import Tab from '@/components/ui/tab'

export default function UserDetailsPage() {
    const { usersData } = useUsersContext()

    const params = useParams<{ user: string }>()

    const router = useRouter()

    // hold active tab
    const [activeTab, setActiveTab] = useState<number>(0)

    // Get the user index from the params and convert to a number
    const userIndex = parseInt(params.user, 10)

    // Get the user details from loca storage based on id
    const userToDisplay = usersData[userIndex - 1]

    // // Tabs heading and their content
    const tabs = [
        {
            label: 'General Details',
            content: () => <GeneralDetails userData={userToDisplay} />,
        },
        { label: 'Details', content: () => <p>Details</p> },
        { label: 'Bank Details', content: () => <p>Bank Details</p> },
        { label: 'Loans', content: () => <p>Loans</p> },
        { label: 'Savings', content: () => <p>Savings</p> },
        { label: 'App and systems', content: () => <p>App and systems</p> },
    ]

    const tabTitles = tabs.map((tab) => tab.label)

    return (
        <>
            {userToDisplay && (
                <div className={styles.container}>
                    <button
                        className={styles.previous_button}
                        onClick={() => router.push('/dashboard/users')}
                    >
                        <span>
                            <Image
                                src={previous}
                                width={15}
                                height={10}
                                alt="Go back"
                            />
                        </span>
                        <span>Back to Users</span>
                    </button>

                    <div className={styles.heading_container}>
                        <h4 className={styles.heading}>User Details</h4>

                        <div>
                            <button
                                type="button"
                                className={styles.cta_blacklist}
                            >
                                blacklist user
                            </button>
                            <button
                                type="button"
                                className={styles.activate_user}
                            >
                                activate user
                            </button>
                        </div>
                    </div>

                    <div className={styles.info_container}>
                        <div className={styles.info_details}>
                            <div className={styles.image_section}>
                                {
                                    <Image
                                        src={avatar}
                                        alt={avatar}
                                        width={100}
                                        height={100}
                                    />
                                }
                                <div>
                                    <p className={styles.f_name}>
                                        {
                                            userToDisplay.personalInformation
                                                .fullName
                                        }
                                    </p>
                                    <p>{userIndex}</p>
                                </div>
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.subsection}>
                                <span>User's Tier</span>
                                <div>
                                    <Image
                                        src={star1}
                                        alt={avatar}
                                        width={15}
                                        height={15}
                                    />
                                    <Image
                                        src={star2}
                                        alt={avatar}
                                        width={15}
                                        height={15}
                                    />
                                    <Image
                                        src={star2}
                                        alt={avatar}
                                        width={15}
                                        height={15}
                                    />
                                </div>
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.subsection}>
                                <span className={styles.amount}>
                                    N{' '}
                                    {
                                        userToDisplay.educationAndEmployment
                                            .monthlyIncome
                                    }
                                </span>
                                <span className={styles.bank_details}>
                                    {userToDisplay.personalInformation.bvn} /
                                    Providus Bank
                                </span>
                            </div>
                        </div>

                        <div className={styles.tab_container}>
                            <Tab
                                titles={tabTitles}
                                activeTab={activeTab}
                                setter={setActiveTab}
                            />
                        </div>
                    </div>

                    {/* Tab content */}
                    <div className={styles.tab_content}>
                        {tabs[activeTab]?.content()}
                    </div>
                </div>
            )}
        </>
    )
}
