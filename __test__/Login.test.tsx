import { render, screen, fireEvent } from '@testing-library/react'
import Login from '@/app/page'
import { useRouter } from 'next/navigation'

// Mocking the Next.js useRouter hook
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}))

describe('Login Component', () => {
    const mockPush = jest.fn()

    beforeEach(() => {
        ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    })

    afterEach(() => {
        jest.clearAllMocks() // Clear mocks after each test
    })

    it('renders the login form', () => {
        render(<Login />)
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /log in/i })
        ).toBeInTheDocument()
    })

    it('allows users to type in the email and password fields', () => {
        render(<Login />)

        const emailInput = screen.getByPlaceholderText(/email/i)
        const passwordInput = screen.getByPlaceholderText(/password/i)

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
        fireEvent.change(passwordInput, { target: { value: 'password123' } })

        expect(emailInput).toHaveValue('test@example.com')
        expect(passwordInput).toHaveValue('password123')
    })

    it('toggles password visibility', () => {
        render(<Login />)

        const passwordInput = screen.getByPlaceholderText(/password/i)
        const toggleButton = screen.getByRole('button', { name: /show/i })

        // Initially, the password input type should be 'password'
        expect(passwordInput).toHaveAttribute('type', 'password')

        // Click the toggle button to show password
        fireEvent.click(toggleButton)
        expect(passwordInput).toHaveAttribute('type', 'text')
        expect(toggleButton).toHaveTextContent('Hide')

        // Click the toggle button again to hide password
        fireEvent.click(toggleButton)
        expect(passwordInput).toHaveAttribute('type', 'password')
        expect(toggleButton).toHaveTextContent('Show')
    })

    it('submits the form and redirects', () => {
        render(<Login />)

        const emailInput = screen.getByPlaceholderText(/email/i)
        const passwordInput = screen.getByPlaceholderText(/password/i)
        const submitButton = screen.getByRole('button', { name: /log in/i })

        // Fill the form
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
        fireEvent.change(passwordInput, { target: { value: 'password123' } })

        // Submit the form
        fireEvent.click(submitButton)

        // Check that the router push was called with the correct URL
        expect(mockPush).toHaveBeenCalledWith('/dashboard/users')
    })

    it('shows "Forgot Password?" link', () => {
        render(<Login />)
        expect(screen.getByText(/forgot password\?/i)).toBeInTheDocument()
    })
})
