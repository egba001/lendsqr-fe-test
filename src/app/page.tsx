'use client'
import { useState } from 'react'

export default function Home() {
    // Interfae for form data
    interface FormData {
        email: string
        password: string
    }

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    })

    return (
        <div className="login-container">
            {/* Illustration section */}
            <div></div>

            {/* Login Section */}
            <div className="login-section">
                <div>
                    <h1 className="heading-one">Welcome!</h1>
                    <p className="heading-two">Enter Details to continue</p>

                    <input type="email" name="email" value={FormData.value} />
                </div>
            </div>
        </div>
    )
}
