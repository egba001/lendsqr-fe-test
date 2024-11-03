import { render, screen } from '@testing-library/react'
import UsersTable from '@/components/users/usersTable'
import { useRouter } from 'next/navigation'

// Mock useRouter to avoid routing errors in tests
jest.mock('next/navigation', () => ({
    useRouter: jest.fn().mockReturnValue({
        push: jest.fn(), // Mock the push function if needed
        prefetch: jest.fn(),
    }),
}))

test('should not render any user rows when usersData is empty', () => {
    render(<UsersTable usersData={[]} setUsersDataAction={jest.fn()} />)
    const rows = screen.queryAllByRole('tr')
    expect(rows).toHaveLength(0)
})
