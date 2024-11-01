'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { UsersInterface } from '@/interfaces/usersInterface'

export interface UserContextType {
    usersData: UsersInterface[]
    loading: boolean
}

const UsersContext = createContext<UserContextType | undefined>(undefined)

export const UsersProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [usersData, setUsersData] = useState<UsersInterface[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const cachedData = localStorage.getItem('usersData')

        if (cachedData) {
            // If data is in local storage, use it
            setUsersData(JSON.parse(cachedData))
            setLoading(false)
        } else {
            // Otherwise, fetch from the API
            const fetchUsersData = async () => {
                const response = await fetch(
                    'https://run.mocky.io/v3/a8597810-24fb-40ea-b840-ce6f2c1e2f68'
                )
                const data = await response.json()
                setUsersData(data)
                localStorage.setItem('usersData', JSON.stringify(data)) // Store data in local storage
                setLoading(false)
            }

            fetchUsersData()
        }
    }, [])

    return (
        <UsersContext.Provider value={{ usersData, loading }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsersContext = () => {
    const context = useContext(UsersContext)
    if (!context) {
        throw new Error('useUsersContext must be used within a UsersProvider')
    }
    return context
}
