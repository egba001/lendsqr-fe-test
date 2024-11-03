'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { UsersInterface } from '@/interfaces/usersInterface'

export interface UserContextType {
    usersData: UsersInterface[]
    loading: boolean
    setUsersData: React.Dispatch<React.SetStateAction<UsersInterface[]>>
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
                    'https://run.mocky.io/v3/f27bafae-8475-43eb-81a5-d3360e7e1d0f'
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
        <UsersContext.Provider value={{ usersData, loading, setUsersData }}>
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
