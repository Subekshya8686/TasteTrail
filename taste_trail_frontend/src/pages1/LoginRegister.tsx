import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './css/LoginRegister.css';
import './homepage.tsx';
import {useMutation} from "react-query";
import axios from "axios";
import {useForm} from "react-hook-form";


const LoginRegister: React.FC = () => {
    const navigate = useNavigate();
    const [formType, setFormType] = useState<'login' | 'register' | ''>('login');
    const [rememberMe, setRememberMe] = useState<boolean>(false); // Declare rememberMe as a boolean

    const {register,
        handleSubmit,
        // formState
    }= useForm();

    useEffect(() => {
        // Check for token in local storage when component mounts
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            // Token found, navigate to homepage
            navigate('/homepage');
        }
    }, [navigate]);

    const saveData = useMutation({
        mutationKey:"SAVEDATA",
        mutationFn:(requestData: any)=>{
            console.log(requestData)
            return axios.post("http://localhost:8080/users/save",
                requestData, {withCredentials: true})
    },
        onSuccess: () => {
            // Redirect to the login form after successful registration
            setFormType('login');},
    });


    const loginUser = useMutation({
        mutationKey:"LOGINUSER",
        mutationFn: (LoginData: any) => {
            return  axios.post("http://localhost:8080/authenticate",
                LoginData)
        }
    });



    const onSubmit=(values:any)=>{
        // saveData.mutate(values)
        if (formType === 'register') {
            saveData.mutate(values);
        } else {
            loginUser.mutate(values,{
                onSuccess(data){
                    console.log(data?.data?.data)
                    localStorage.setItem("accessToken",data?.data?.data?.token);
                    localStorage.setItem("userId",data?.data?.data?.userId);

                    if(data.data.data.role==="admin"){
                        window.location.href="/admin"
                    }else{
                        window.location.href="/homepage"

                    }
                }
            });
        }
    }





    return (
        <>
        <div className="flex-container">
            <div className="container-wrapper" id="container1">
                <img src={"Food.jpg"} height="80%" width="100%" alt="Description of the image" />
            </div>
            <div className="container">
                <form className={`form ${formType === 'register' ? 'active' : ''}`} onSubmit={handleSubmit(onSubmit)}>
                    <h1>
                        <a href="/"><label>Taste</label><span>Trail</span></a>
                    </h1>
                    {formType === 'login' && <h2 className="title">Login</h2>}
                    {formType === 'register' && <h2 className="title">Register</h2>}

                    {formType === 'register' && (
                        <>
                            <div className="form-group">
                                <div className="input-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        required{...register("firstName")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        required{...register("lastName")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        required{...register("email")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        required{...register("username")}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        pattern=".{6,}"
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
                                        placeholder="Confirm Password"
                                        required{...register("confirmPassword")}
                                    />
                                </div>
                                <span className="help-text">Both passwords must match</span>
                            </div>


                        </>
                    )}


                    {formType !== 'register' && (
                        <div className="form-group">
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
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
                                    placeholder="Password"
                                    required{...register("password")}
                                />
                            </div>
                            <span className="help-text">At least 6 characters</span>
                        </div>
                    )}
                    {formType === 'login' && (
                        <div className="remember-forgot">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />Remember me
                            </label>
                            <a href="/ForgetPassword">Forgot Password?</a>
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

