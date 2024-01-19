import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './css/LoginRegister.css';
import './homepage.tsx';
import {useMutation} from "react-query";
import axios from "axios";
import {useForm} from "react-hook-form";

const LoginRegister: React.FC = () => {
    // const navigate = useNavigate();
    const [formType, setFormType] = useState<'login' | 'register' | ''>('login');
    // const [formState, setFormState] = useState({
    //     firstName: '',
    //     lastName: '',
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    // });

    const {register,
        handleSubmit,
        formState
    }= useForm();

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //
    //     if (formType === 'login') {
    //         // Perform login logic based on formState
    //         console.log('Login Form submitted:', formState);
    //         // session storage
    //         sessionStorage.setItem('username', formState.username);
    //         sessionStorage.setItem('password', formState.password);
    //
    //     } else if (formType === 'register') {
    //         // Perform registration logic based on formState
    //         console.log('Register Form submitted:', formState);
    //         onSubmit(formState);
    //
    //     }
    // };

    // <meta name="viewport" content="width=device-width,initial-scale=1.0"/>


    const saveData = useMutation({
        mutationKey:"SAVEDATA",
        mutationFn:(requestData: any)=>{
            console.log(requestData)
            return axios.post("http://localhost:8080/users/save", requestData, {withCredentials: true})
    },
    });


    const loginUser = useMutation({
        mutationKey:"LOGINUSER",
        mutationFn:(LoginData: any)=>{
            console.log(LoginData)
            return axios.post("http://localhost:8080/authenticate", LoginData, {withCredentials: true})
        },
    });


    const onSubmit=(values:any)=>{
        saveData.mutate(values)
    }
    const handleLogin =(values:any)=>{
        loginUser.mutate(values)
    }




    return (
        <>
        <div className="flex-container">
            <div className="container-wrapper" id="container1">
                <img src="Food.jpg" height="80%" width="100%" alt="Description of the image" />
            </div>
            <div className="container">
                <form className={`form ${formType === 'register' ? 'active' : ''}`} onSubmit={formType === 'register' ? handleSubmit(onSubmit) : handleSubmit(handleLogin)}>
                    <h1>
                        <a href="/h">Taste<span>Trail</span></a>
                    </h1>
                    {formType === 'login' && <h2 className="title">Login</h2>}
                    {formType === 'register' && <h2 className="title">Register</h2>}

                    {formType === 'register' && (
                        <>
                            <div className="form-group">
                                {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
                                <div className="input-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        // id="firstName"
                                        // value={formState.firstName}
                                        // onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                                        placeholder="First Name"
                                        required{...register("firstName")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        // id="lastName"
                                        // value={formState.lastName}
                                        // onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                                        placeholder="Last Name"
                                        required{...register("lastName")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        // id="email"
                                        // value={formState.email}
                                        // onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="Email address"
                                        required{...register("email")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        // id="username"
                                        // value={formState.username}
                                        // onChange={(e) => setFormState({ ...formState, username: e.target.value })}
                                        placeholder="Username"
                                        required{...register("username")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        pattern=".{6,}"
                                        // id="password"
                                        // value={formState.password}
                                        // onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                                        placeholder="Password"
                                        required{...register("password")}
                                    />
                                </div>
                                <span className="help-text">At least 6 characters</span>
                                <br/>
                                <div className="input-group">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input
                                        type="password"
                                        pattern=".{6,}"
                                        // id="confirm-password"
                                        // value={formState.confirmPassword}
                                        // onChange={(e) => setFormState({ ...formState, confirmPassword: e.target.value })}
                                        placeholder="Confirm Password"
                                        required{...register("confirmPassword")}
                                    />
                                </div>
                                <span className="help-text">Both passwords must match</span>
                                {/*</form>*/}
                            </div>
                            {/*<div className="form-group">*/}
                            {/*    */}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    */}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    */}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    */}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    */}
                            {/*</div>*/}

                        </>
                    )}


                    {formType !== 'register' && (
                        <div className="form-group">
                            {/*<form onSubmit={handleSubmit(handleLogin)}>*/}
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    // value={formState.username}
                                    // onChange={(e) => setFormState({ ...formState, username: e.target.value })}
                                    placeholder="Username"
                                    required{...register("username")}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    pattern=".{6,}"
                                    id="password"
                                    // value={formState.password}
                                    // onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                                    placeholder="Password"
                                    required{...register("password")}
                                />
                            </div>
                            <span className="help-text">At least 6 characters</span>
                            {/*</form>*/}
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

                    <button type={"submit"} className="btn-submit">
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
        </>
    );
};

export default LoginRegister;

