// src/App.tsx
import React from 'react';
import ForgetPasswordForm from '../components/ForgetPasswordForm';
import SubmitOtpForm from '../components/SubmitOtpForm';
import UpdatePasswordForm from '../components/UpdateOtpPasswordForm.tsx';
// import './css/ResetPassword.css';

const ForgetPassword: React.FC = () => {

    return (
        <div>
            <h1>Forget Password</h1>
            <ForgetPasswordForm />

            <h2>Submit OTP</h2>
            <SubmitOtpForm />

            <h2>Update Password</h2>
            <UpdatePasswordForm />
        </div>
    );
};

export default ForgetPassword;
