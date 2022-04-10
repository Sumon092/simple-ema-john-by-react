import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>

            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Enter your email' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" placeholder='Enter your password' />
                        </div>
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