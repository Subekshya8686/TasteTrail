// src/App.tsx
import React from 'react';
import ForgetPasswordForm from '../components/ForgetPasswordForm';
import Header from "../components/header.tsx";

// import './css/ResetPassword.css';

const ForgetPassword: React.FC = () => {

    return (
        <>
        <Header/>
        <div>
            <h1>Forget Password</h1>
            <ForgetPasswordForm />
        </div>
        </>
    );
};

export default ForgetPassword;