import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { asyncdeleteuser, asynclogoutuser, asyncregisteruser, asyncupdateuser } from '../../store/actions/UserAction';

const UserProfile = () => {
    const user = useSelector((state) => state.user.data);
    const id = user?.id;

    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            defaultValues: {
                username: user?.username,
                email: user?.email,
                password: user?.password,
            }
        }
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const updateuserprofile = (data) => {
        dispatch(asyncupdateuser(id, data))
        
    }
    const logoutHandler = () => {
        dispatch(asynclogoutuser());
        navigate('/login')
    }

    const deleteAccountHandler = () => {
        dispatch(asyncdeleteuser(id));
        toast.success("Account deleted successfully!");
        navigate('/');
    }

    const [showPassword, setshowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setshowPassword(!showPassword);
    }

    return user ? (
        <>
            <div className='w-full min-h-screen'>
                <h1 className='text-5xl font-semibold w-full bg-gray-100 px-20 py-5'>User Profile</h1>
                <div className='flex justify-center items-center w-full py-15'>
                    <div className='w-[60rem] mx-auto flex flex-row bg-gray-100 rounded-2xl'>
                        <div className='w-1/2 bg-blue-500 rounded-2xl overflow-hidden relative'>
                            <DotLottieReact
                                src="/Loginplan.lottie"
                                loop
                                autoplay
                                muted
                                className='w-full h-full '
                            />
                            <h1 className='absolute text-3xl text-white top-5 left-5 font-bold'>TechPulse</h1>
                        </div>
                        <div className='w-1/2 px-10 pt-20 pb-15'>
                            <form onSubmit={handleSubmit(updateuserprofile)} className='flex flex-col gap-7'>
                                <div>
                                    <h1 className='text-[2rem] font-bold '>Welcome to TechPulse!</h1>
                                    <p className='text-gray-500'>You can Update, Logout & Delete your account</p>
                                </div>
                                <div>
                                    <label className='text-gray-700 font-semibold'>Username</label>
                                    <input type="text" placeholder='Enter your username' {...register("username", { required: "Username is required" })} className='w-full px-4 py-2 rounded-4xl border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-2' />
                                    {errors.username && <p className='text-red-500 text-sm'>{errors.username.message}</p>}
                                </div>
                                <div>
                                    <label className='text-gray-700 font-semibold'>Email</label>
                                    <input type="email" placeholder='Enter your mail' {...register("email", { required: "Email is required" })} className='w-full px-4 py-2 rounded-4xl border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-2' />
                                    {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className='text-gray-700 font-semibold'>Password</label>
                                    <div className='relative'>
                                        <input type={showPassword ? "text" : "password"} placeholder='Enter your password' {...register("password", { required: "Password is required" })} className='w-full px-4 py-2 rounded-4xl border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-2' />
                                        <button type='button' onClick={togglePasswordVisibility} className='absolute right-4 top-4 text-lg'>{showPassword ? <i className="ri-eye-line"></i> : <i className="ri-eye-close-line"></i>}</button>
                                    </div>
                                    {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
                                </div>

                                <button type='submit' className='bg-blue-500 px-4 py-2 text-white rounded-4xl cursor-pointer'>Update Profile</button>
                                <button type='button' onClick={logoutHandler} className='bg-red-500 px-10 py-2 text-white rounded-4xl cursor-pointer'>Logout</button>
                                <button type='button' onClick={deleteAccountHandler} className='bg-red-500 px-4 py-2 text-white rounded-4xl cursor-pointer'>Delete Account</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    ) : <>
        <div className='w-full rounded-2xl overflow-hidden relative'>
            <DotLottieReact
                src="/No-Data.lottie"
                loop
                autoplay
                muted
                className='w-full h-full '
            />
        </div>
    </>
}

export default UserProfile