import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Sign up</h2>
                    <form>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Enter your email' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" placeholder='Enter your password' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="password" id="" placeholder='Confirm your password' />
                        </div>
                        <div >
                            <input className="form-submit" type="submit" value="Login" />
                        </div>
                    </form>
                    <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;