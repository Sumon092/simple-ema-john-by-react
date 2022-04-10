import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handleAddressBlur = (event) => {
        setPhone(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>

            <div className="form-container">
                <div>
                    <h2 className='form-title'>Shipping information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Enter your name' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' />
                        </div>

                        <div className="input-group">
                            <label htmlFor="phone">Phone</label>
                            <input onBlur={handleAddressBlur} type="text" name="phone" id="" placeholder='Enter your phone' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddressBlur} type="text" name="address" id="" placeholder='Enter your address' />
                        </div>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            // loading && <p style={{ color: 'red' }}>Loading...</p>
                        }
                        <div >
                            <input className="form-submit" type="submit" value="Confirm Shipping" />
                        </div>
                    </form>
                    {/* <p>New to Ema-john ? <Link className='form-link' to='/signup'>Create an account</Link></p> */}
                </div>

            </div>
        </div>
    );
};

export default Shipment;