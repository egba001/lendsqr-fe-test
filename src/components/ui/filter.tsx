'use client'
import { useState } from 'react'
import styles from '@/assets/styles/filter.module.scss'

interface FilterProps {
    onFilterAction: (filters: Filters) => void // Callback to send filter data
    onResetAction: () => void
    closeFilterAction: () => void
}

export interface Filters {
    company: string
    username: string
    email: string
    date: string
    phoneNumber: string
    employmentStatus: string
}

export function Filter({
    onFilterAction,
    onResetAction,
    closeFilterAction,
}: FilterProps) {
    const [filters, setFilters] = useState<Filters>({
        company: '',
        username: '',
        email: '',
        date: '',
        phoneNumber: '',
        employmentStatus: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // Handle reset of filters
    const handleReset = () => {
        setFilters({
            company: '',
            username: '',
            email: '',
            date: '',
            phoneNumber: '',
            employmentStatus: '',
        })
        onResetAction() // Call the reset callback
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        closeFilterAction()
        onFilterAction(filters) // Pass filters to the parent component
    }

    return (
        <div className={styles.filter_container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.input_div}>
                    <label htmlFor="company">Organisation</label>
                    <select
                        name="company"
                        value={filters.company}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Lendsqr">Lendsqr</option>
                        <option value="Lendstar">Lendstar</option>
                        <option value="Irorun">Irorun</option>
                    </select>
                </div>

                <div className={styles.input_div}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={filters.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                    />
                </div>

                <div className={styles.input_div}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={filters.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>

                <div className={styles.input_div}>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={filters.date}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.input_div}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={filters.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone number"
                    />
                </div>

                <div className={styles.input_div}>
                    <label htmlFor="employmentStatus">Employment Status</label>
                    <select
                        name="employmentStatus"
                        value={filters.employmentStatus}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                    </select>
                </div>

                <div className={styles.button_section}>
                    <button
                        onClick={handleReset}
                        className={styles.reset_button}
                        type="button"
                    >
                        Reset
                    </button>
                    <button className={styles.filter_button} type="submit">
                        Filter
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Filter
