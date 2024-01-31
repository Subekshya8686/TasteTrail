import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/LoginRegister.css'; // Ensure to create this new CSS file for styling

const LoginRegister = () => {
    const navigate = useNavigate();
    const [formType, setFormType] = useState('login');
    const [rememberMe, setRememberMe] = useState(false);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            navigate('/homepage');
        }
    }, [navigate]);

    const saveData = useMutation({
        mutationKey: 'SAVEDATA',
        mutationFn: (requestData) => {
            return axios.post("http://localhost:8080/users/save", requestData, { withCredentials: true });
        },
        onSuccess: () => {
            setFormType('login');
        },
    });

    const loginUser = useMutation({
        mutationKey: 'LOGINUSER',
        mutationFn: (LoginData) => {
            return axios.post("http://localhost:8080/authenticate", LoginData);
        }
    });

    const onSubmit = (values) => {
        if (formType === 'register') {
            saveData.mutate(values);
        } else {
            loginUser.mutate(values, {
                onSuccess: (data) => {
                    if (rememberMe) {
                        localStorage.setItem('accessToken', data?.data?.data?.token);
                        localStorage.setItem('userId', data?.data?.data?.userId);
                    }
                    navigate('/homepage');
                },
            });
        }
    };

    return (
        <div className="new-login-register">
            <div className="form-container">
                <div className="switcher">
                    <button onClick={() => setFormType('login')} className={formType === 'login' ? 'active' : ''}>Login</button>
                    <button onClick={() => setFormType('register')} className={formType === 'register' ? 'active' : ''}>Register</button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {formType === 'register' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" {...register("firstName")} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" {...register("lastName")} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" {...register("email")} required />
                            </div>
                            {/* Other registration fields... */}
                        </>
                    )}

                    {formType !== 'register' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" {...register("username")} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" {...register("password")} required />
                            </div>
                            {formType === 'login' && (
                                <div className="remember-forgot">
                                    <label>
                                        <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                                        Remember me
                                    </label>
                                    <a href="/ForgetPassword">Forgot Password?</a>
                                </div>
                            )}
                        </>
                    )}

                    <button type="submit" className="submit-button">
                        {formType === 'login' ? 'Login' : 'Register'}
                    </button>

                    <p className="toggle-form">
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
