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
    companyName: string
    userName: string
    email: string
    phoneNumber: string
    dateJoined: string
    status: string
    personalInformation: PersonalInformation
    educationAndEmployment: EducationAndEmployment
    socials: Socials
    guarantor: Guarantor[]
}
