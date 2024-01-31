import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const ForgetPasswordForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const navigateTo = (path: string) => {
        navigate(path);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Make a POST request to the forget password endpoint
            const response = await fetch('http://localhost:8080/users/forget-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            // Handle the response accordingly (display a success message or handle errors)
        } catch (error) {
            console.error('Error initiating forget password:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit" onClick={() => navigateTo('/SubmitOTP')}>Verify Email</button>
        </form>
    );
};

export default ForgetPasswordForm;