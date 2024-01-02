import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginRegister.css';
import './homepage.tsx';

const LoginRegister: React.FC = () => {
    const navigate = useNavigate();
    const [formType, setFormType] = useState<'login' | 'register' | ''>('login');
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formType === 'login') {
            // Perform login logic based on formState
            console.log('Login Form submitted:', formState);
            // Redirect to another page if needed
            navigate('/dashboard');
        } else if (formType === 'register') {
            // Perform registration logic based on formState
            console.log('Register Form submitted:', formState);
            // Redirect to another page if needed
            navigate('/dashboard');
        }
    };

    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>

    return (
        <div className="flex-container">
            <div className="container-wrapper" id="container1">
                <img src="Food.jpg" height="80%" width="100%" alt="Description of the image" />
            </div>
            <div className="container">
                <form className={`form ${formType === 'register' ? 'active' : ''}`} onSubmit={handleSubmit}>
                    <h1>
                        <a href="/h">Taste<span>Trail</span></a>
                    </h1>
                    {formType === 'login' && <h2 className="title">Login</h2>}
                    {formType === 'register' && <h2 className="title">Register</h2>}

                    {formType === 'register' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={formState.firstName}
                                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={formState.lastName}
                                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="username"
                                        value={formState.username}
                                        onChange={(e) => setFormState({ ...formState, username: e.target.value })}
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        pattern=".{6,}"
                                        id="password"
                                        value={formState.password}
                                        onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <span className="help-text">At least 6 characters</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        pattern=".{6,}"
                                        id="confirm-password"
                                        value={formState.confirmPassword}
                                        onChange={(e) => setFormState({ ...formState, confirmPassword: e.target.value })}
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </div>
                                <span className="help-text">Both passwords must match</span>
                            </div>
                        </>
                    )}

                    {formType !== 'register' && (
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="username"
                                    value={formState.username}
                                    onChange={(e) => setFormState({ ...formState, username: e.target.value })}
                                    placeholder="Username"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {formType !== 'register' && (
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-group">
                                <input
                                    type="password"
                                    pattern=".{6,}"
                                    id="password"
                                    value={formState.password}
                                    onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <span className="help-text">At least 6 characters</span>
                        </div>
                    )}

                    {formType === 'login' && (
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox"/>Remember me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>
                    )}

                    <button type="submit" className="btn-submit">
                        {formType === 'login' ? 'Login' : 'Register'}
                    </button>

                    <p>
                        {formType === 'login' ? "Don't have an account?" : 'Already have an account?'}
                        <span onClick={() => setFormType(formType === 'login' ? 'register' : 'login')}>
                            {formType === 'login' ? ' Sign Up' : ' Sign In'}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;

