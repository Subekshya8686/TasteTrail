import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Header from "./header.tsx";

const UpdatePasswordForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmnewPassword, setCNewPassword] = useState('');
    const navigate = useNavigate();


    const navigateTo = (path: string) => {
        navigate(path);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Make a POST request to the update password endpoint
            const response = await fetch('http://localhost:8080/users/update-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, newPassword, confirmnewPassword }),
            });

            // Handle the response accordingly (display a success message or handle errors)
        } catch (error) {
            console.error('Error updating password:', error);
        }
    };

    return (
        <>
            <Header/>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>New Password:</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            <input type="password" value={confirmnewPassword} onChange={(e) => setCNewPassword(e.target.value)} required />
            <button type="submit" onClick={() => navigateTo('/user-profile')}>Update Password</button>
        </form>
        </>
    );
};

export default UpdatePasswordForm;