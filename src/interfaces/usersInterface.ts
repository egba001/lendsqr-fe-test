interface PersonalInformation {
    fullName: string
    bvn: string
    gender: string
    maritalStatus: string
    children: number
    typeOfResidence: string
}

interface EducationAndEmployment {
    levelOfEducation: string
    employmentStatus: string
    sector: string
    duration: string
    officialEmail: string
    monthlyIncome: number
    loanRepayment: number
}

interface Socials {
    facebook: string
    twitter: string
    instagram: string
}

interface Guarantor {
    fullName: string
    phoneNumber: string
    emailAddress: string
    relationship: string
}

export interface UsersInterface {
    id: number // The user's unique ID
    avatar: string // URL or path to the user's avatar
    bank: string // Bank name
    accountNumber: string // User's account number
    userId: string // Unique identifier for the user
    companyName: string // Company name associated with the user
    userName: string // Username
    email: string // User's email address
    phoneNumber: string // User's phone number
    dateJoined: string // Date and time when the user joined (ISO format)
    status: string // User status (active, inactive, etc.)
    personalInformation: PersonalInformation // Nested object for personal information
    educationAndEmployment: EducationAndEmployment // Nested object for education and employment information
    socials: Socials // Nested object for social media links
    guarantor: Guarantor[] // Array of guarantor objects
}
