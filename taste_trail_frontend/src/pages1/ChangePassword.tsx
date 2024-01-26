import React from 'react';
import ChangePasswordForm from '../components/ChangePasswordForm';

const ChangePassword: React.FC = () => {
    return (
        <div className="container"> {/* Apply the container style */}
            <h1>Password Change Example</h1>
            <ChangePasswordForm />
        </div>
    );
};

export default ChangePassword;
