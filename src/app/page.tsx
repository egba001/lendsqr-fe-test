'use client'
import Link from 'next/link'
import React, { FormHTMLAttributes, useState } from 'react'
import { useRouter } from 'next/navigation'
import logo from '@/assets/image/icons/logo.svg'
import illustration from '@/assets/image/icons/illustration.svg'
import Image from 'next/image'
import styles from '@/assets/styles/login.module.scss'
import localFont from 'next/font/local'

const avenirBold = localFont({
    src: '../assets/font/AvenirNextLTPro-Bold.otf',
    display: 'swap',
})

const avenirRegular = localFont({
    src: '../assets/font/AvenirNextLTPro-Regular.otf',
    display: 'swap',
})

export default function Login() {
    // Interface for form data
    interface FormData {
        email: string
        password: string
    }

    const router = useRouter()

    // State to hold login data
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    })

    // Boolean state to determine password display
    const [showPassword, setShowPassword] = useState(false)

    // Change handler function for input component
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        router.push('/dashboard/users')
    }

    return (
        <div className={styles.login_container}>
            {/* Illustration section */}
            <div className={styles.illustration_container}>
                <div className={styles.image_group}>
                    <Image
                        src={logo}
                        alt="Lendsqr logo"
                        width={200}
                        height={50}
                    />

                    <div className={styles.illustration}>
                        <Image
                            src={illustration}
                            alt="Illustration"
                            layout="responsive"
                            style={{ objectFit: 'contain' }}
                            width={650}
                            height={330}
                        />
                    </div>
                </div>
            </div>

            {/* Login Section */}
            <div className={styles.login_section}>
                <div className={styles.form_container}>
                    <h1
                        className={`${styles.main_heading} ${avenirBold.className}`}
                    >
                        Welcome!
                    </h1>
                    <p
                        className={`${avenirRegular.className} ${styles.sub_heading}`}
                    >
                        Enter details to login
                    </p>

                    <form
                        className={avenirRegular.className}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.inputs_container}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={onInputChange}
                                required
                                className={styles.input_styling}
                            />

                            <div className={styles.password_input}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    onChange={onInputChange}
                                    required
                                    value={formData.password}
                                    className={styles.input_styling}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className={
                                        styles.password_visibility_button
                                    }
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        <Link href="#" className={styles.fg_password}>
                            Forgot Password?
                        </Link>
                        <button
                            className={styles.login_button}
                            type="submit"
                            // disabled={formData.email.length === 0 || formData.password.length === 0}
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
