import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import axios from "axios";

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false); // To handle loading state
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        if (!name || !email || !password) {
            return handleError('Name, email, and password are required');
        }

        setLoading(true); // Set loading to true when request starts

        try {
            const url = `http://localhost:8080/auth/signup`;  // Check if this URL is correct
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            // const response = await axios.post("http://localhost:8080/auth/signup", {
            //     name: name,
            //     email: email,
            //     password: password
            // });

            // console.log("what is the response data :", response);


            // Handle unsuccessful responses
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }

            const result = await response.json();
            console.log("After successful signup :", result);
            const { success, message, error } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0]?.message;
                handleError(details || message);
            } else {
                handleError(message);
            }

        } catch (err) {
            handleError(`Error: ${err.message}`);  // Display more detailed error message
        } finally {
            setLoading(false);  // Set loading to false when request is completed
        }
    };

    return (
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                    />
                </div>
                <button type='submit' disabled={loading}>
                    {loading ? 'Signing Up...' : 'Signup'}
                </button>
                <span>Already have an account?
                    <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Signup;