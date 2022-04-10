import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, hookerror, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop')
    }
    const handleError = (event) => {
        setError(event.target.value)
    }
    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("Password did't match")
        }
        if (password.length < 6) {
            setError('Password Must be at least six characters');
            return
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                // const user = result.user;
                console.log('user created');
            })
    }


    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Sign up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Enter your email' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Enter your password' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="password" id="" placeholder='Confirm your password' />
                        </div>
                        <p style={{ color: 'red' }} > {error || hookerror}</p>
                        <div >
                            <input className="form-submit" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;