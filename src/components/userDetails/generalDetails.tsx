import styles from '@/assets/styles/generalDetails.module.scss'
import { UsersInterface } from '@/interfaces/usersInterface'

// Interface for data tag props
interface DataTagProps {
    title: string
    value: string
}

// Interface for GeneralDetails component
interface GeneralDetailsProps {
    userData: UsersInterface
}

export default function GeneralDetails({ userData }: GeneralDetailsProps) {
    // Fetch guarantor details here
    const guarantor = userData && userData.guarantor[0]

    return (
        <>
            {userData && (
                <div className={styles.section_container}>
                    {/* Personal informtion */}
                    <section className={styles.section_style}>
                        <h5>Personal Information</h5>
                        <div className={styles.info_grid}>
                            <DataTag
                                title="full name"
                                value={userData.personalInformation.fullName}
                            />
                            <DataTag
                                title="phone number"
                                value={userData.personalInformation.fullName}
                            />
                            <DataTag
                                title="email address"
                                value={userData.email}
                            />
                            <DataTag
                                title="bvn"
                                value={userData.personalInformation.fullName}
                            />
                            <DataTag
                                title="gender"
                                value={userData.personalInformation.bvn}
                            />
                            <DataTag
                                title="marital status"
                                value={
                                    userData.personalInformation.maritalStatus
                                }
                            />
                            <DataTag
                                title="children"
                                value={userData.personalInformation.children.toString()}
                            />
                            <DataTag
                                title="type of residence"
                                value={
                                    userData.personalInformation.typeOfResidence
                                }
                            />
                        </div>
                    </section>

                    {/* Education and employment */}
                    <section className={styles.section_style}>
                        <h5>Education and employment</h5>
                        <div className={styles.row_two}>
                            <DataTag
                                title="level of education"
                                value={
                                    userData.educationAndEmployment
                                        .levelOfEducation
                                }
                            />
                            <DataTag
                                title="employment status"
                                value={
                                    userData.educationAndEmployment
                                        .employmentStatus
                                }
                            />
                            <DataTag
                                title="sector of employment"
                                value={userData.educationAndEmployment.sector}
                            />
                            <DataTag
                                title="duration of employment"
                                value={userData.educationAndEmployment.duration}
                            />
                            <DataTag
                                title="official email"
                                value={
                                    userData.educationAndEmployment
                                        .officialEmail
                                }
                            />
                            <DataTag
                                title="monthly income"
                                value={userData.educationAndEmployment.monthlyIncome.toString()}
                            />
                            <DataTag
                                title="loan repayment"
                                value={userData.educationAndEmployment.loanRepayment.toString()}
                            />
                        </div>
                    </section>

                    {/* Socials */}
                    <section className={styles.section_style}>
                        <h5>Socials</h5>
                        <div className={styles.info_grid}>
                            <DataTag
                                title="twitter"
                                value={userData.socials.twitter}
                            />
                            <DataTag
                                title="facebook"
                                value={userData.socials.facebook}
                            />
                            <DataTag
                                title="instagram"
                                value={userData.socials.instagram}
                            />
                        </div>
                    </section>

                    {/* Guarantor */}
                    <section className={styles.section_style}>
                        <h5>Guarantor</h5>
                        <div className={styles.info_grid}>
                            <DataTag
                                title="full name"
                                value={guarantor.fullName}
                            />
                            <DataTag
                                title="phone number"
                                value={guarantor.phoneNumber}
                            />
                            <DataTag
                                title="email address"
                                value={guarantor.emailAddress}
                            />
                            <DataTag
                                title="relationship"
                                value={guarantor.relationship}
                            />
                        </div>
                    </section>
                </div>
            )}
        </>
    )
}

function DataTag({ title, value }: DataTagProps) {
    return (
        <div className={styles.tag_container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.value}>{value}</p>
        </div>
    )
}
