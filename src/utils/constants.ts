import { NavData, TableHeadings } from '../interfaces/constantsInterface'
import users from '@/assets/image/icons/user.svg'
import guarantors from '@/assets/image/icons/guarantors.svg'
import loans from '@/assets/image/icons/loans.svg'
import models from '@/assets/image/icons/models.svg'
import savings from '@/assets/image/icons/savings.svg'
import requests from '@/assets/image/icons/requests.svg'
import products from '@/assets/image/icons/products.svg'
import whitelist from '@/assets/image/icons/whitelist.svg'
import karma from '@/assets/image/icons/karma.svg'
import organization from '@/assets/image/icons/org.svg'
import savingsProducts from '@/assets/image/icons/savings_product.svg'
import fees from '@/assets/image/icons/fees.svg'
import transactions from '@/assets/image/icons/transactions.svg'
import services from '@/assets/image/icons/services.svg'
import serv_account from '@/assets/image/icons/service_account.svg'
import settlements from '@/assets/image/icons/settlements.svg'
import reports from '@/assets/image/icons/reports.svg'
import preferences from '@/assets/image/icons/preferences.svg'
import feesAndPricing from '@/assets/image/icons/pricing.svg'
import auditLogs from '@/assets/image/icons/logs.svg'

// Contains all data for nav menu under customers on the sidebar
export const customersNavigations: NavData[] = [
    { title: 'Users', icon: users, route: '/dashboard/users' },
    { title: 'Guarantors', icon: guarantors, route: '/dashboard/users' },
    { title: 'Loans', icon: loans, route: '/dashboard/users' },
    { title: 'Decision Models', icon: models, route: '/dashboard/users' },
    { title: 'Savings', icon: savings, route: '/dashboard/users' },
    { title: 'Loan Requests', icon: requests, route: '/dashboard/users' },
    { title: 'Whitelist', icon: whitelist, route: '/dashboard/users' },
    { title: 'Karma', icon: karma, route: '/dashboard/users' },
]

// Contains all data for nav menu under businesses on the sidebar
export const businessesNavigation: NavData[] = [
    { title: 'Organization', icon: organization, route: '/dashboard/#' },
    { title: 'Loan Products', icon: products, route: '/dashboard/#' },
    {
        title: 'Savings Products',
        icon: savingsProducts,
        route: '/dashboard/#',
    },
    { title: 'Fees and Charges', icon: fees, route: '/dashboard/#' },
    { title: 'Transactions', icon: transactions, route: '/dashboard/#' },
    { title: 'Services', icon: services, route: '/dashboard/#' },
    { title: 'Service Account', icon: serv_account, route: '/dashboard/#' },
    { title: 'Settlements', icon: settlements, route: '/dashboard/#' },
    { title: 'Reports', icon: reports, route: '/dashboard/#' },
]

// Contains all data for nav menu under settings on the sidebar
export const settingsNavigation: NavData[] = [
    { title: 'Preferences', icon: preferences, route: '/dashboard/#' },
    {
        title: 'Fees and Pricing',
        icon: feesAndPricing,
        route: '/dashboard/#',
    },
    { title: 'Audit Logs', icon: auditLogs, route: '/dashboard/#' },
]

// An array of table headers for users page
export const tableHeaders: TableHeadings[] = [
    {
        id: 1,
        title: 'Organization',
    },
    {
        id: 2,
        title: 'User',
    },
    {
        id: 3,
        title: 'Email',
    },
    {
        id: 4,
        title: 'Phone Number',
    },
    {
        id: 5,
        title: 'Date Joined',
    },
    {
        id: 6,
        title: 'Status',
    },
]
