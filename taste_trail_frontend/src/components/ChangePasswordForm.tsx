import React, { useState } from 'react';
import Header from "./header.tsx";

const ChangePasswordForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Make a POST request to the change password endpoint
            const response = await fetch('http://localhost:8080/users/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, oldPassword, newPassword }),
            });

            // Handle the response accordingly (display a success message or handle errors)
        } catch (error) {
            console.error('Error changing password:', error);
        }
    };

    return (
        <>
            <Header/>
        <form onSubmit={handleSubmit}>
            <div className="password-t">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Old Password:</label>
            <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
            <label>New Password:</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <button type="submit">Change Password</button>
        </form>
            </>
    );
};

export default ChangePasswordForm;
