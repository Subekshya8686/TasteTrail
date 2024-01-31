// src/App.tsx
import React from 'react';
import ForgetPasswordForm from '../components/ForgetPasswordForm';

// import './css/ResetPassword.css';

const ForgetPassword: React.FC = () => {

    return (
        <div>
            <h1>Forget Password</h1>
            <ForgetPasswordForm />
        </div>
    );
};

export default ForgetPassword;