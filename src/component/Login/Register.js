import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { sinInUsingGoogle, createUserWithEmail, setIsLoading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handelSubmitWithEmail = e => {
        e.preventDefault();
        createUserWithEmail(name, email, password);
        setIsLoading(true);
    }

    const handelName = e => {
        setName(e.target.value)
    }
    const handelEmail = e => {
        setEmail(e.target.value)
    }
    const handelPassword = e => {
        setPassword(e.target.value)
    }
    console.log(name, email, password);
    return (
        <div className="">
            <div class="min-h-screen flex  justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{ "background-image": "url(https://i.ibb.co/k0pQym8/doctors-g53a525b30-1920.jpg)" }}>
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
                    <div class="text-center">
                        <h2 class="mt-6 text-3xl font-bold text-gray-900">
                            Welcom To MYSK
                        </h2>
                        <p class="mt-2 text-sm text-gray-600">Please sign up to your account</p>
                    </div>

                    <form onSubmit={handelSubmitWithEmail} class="mt-8 space-y-6" action="#" method="POST">

                        <label class="text-sm font-bold text-gray-700 tracking-wide">Name</label>
                        <div class="relative">
                            <input onChange={handelName} class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter your Name" />
                        </div>
                        <div class="relative">
                            <label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                            <input onChange={handelEmail} class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="Enter your email" required />
                        </div>
                        <div class="mt-8 content-center">
                            <label class="text-sm font-bold text-gray-700 tracking-wide"> Password</label>
                            <input onChange={handelPassword} class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" required />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
                                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="w-full flex justify-center  text-gray-100 p-4  rounded-full tracking-wide  focus: outline-none focus: shadow-outline hover: bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                Sign Up
                            </button>
                        </div>
                        <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            <span>Already have a account?</span>
                            <Link to="/login" class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign In</Link>
                        </p>
                    </form>

                    <div class="flex items-center justify-center space-x-2">
                        <span class="h-px w-16 bg-gray-300"></span>
                        <span class="text-gray-500 font-normal">OR</span>
                        <span class="h-px w-16 bg-gray-300"></span>
                    </div>
                    <div class="flex flex-row justify-center items-center space-x-3">
                        <span onClick={sinInUsingGoogle} class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"><i class="fab fa-google"></i></span>
                        <span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"><i class="fab fa-facebook"></i></span>
                        <span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300"><i class="fab fa-github"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;