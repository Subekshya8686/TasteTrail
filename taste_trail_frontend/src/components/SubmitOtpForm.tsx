import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Header from "./header.tsx";

const SubmitOtpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();


    const navigateTo = (path: string) => {
        navigate(path);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Make a POST request to the submit OTP endpoint
            const response = await fetch('http://localhost:8080/users/submit-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });

            // Handle the response accordingly (display a success message or handle errors)
        } catch (error) {
            console.error('Error submitting OTP:', error);
        }
    };

    return (
        <>
            <Header/>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>OTP:</label>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            <button type="submit" onClick={() => navigateTo('/UpdateOtp')}>Submit OTP</button>
        </form>
        </>
    );
};

export default SubmitOtpForm;