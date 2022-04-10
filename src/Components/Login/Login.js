import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }



    return (
        <div>

            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Enter your password' />
                        </div>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p style={{ color: 'red' }}>Loading...</p>
                        }
                        <div >
                            <input className="form-submit" type="submit" value="Login" />
                        </div>
                    </form>
                    <p>New to Ema-john ? <Link className='form-link' to='/signup'>Create an account</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;