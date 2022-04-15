import React from 'react';
import './Signup.css'
import logo from '../../images/images/logo2.png'
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    return (
        <div>
            <div className='form-container container'>
                <img height={'70px'} className='top-img rounded mx-auto d-block my-5 w-25' src={logo} alt="" />
                <form className='row d-flex flex-column align-items-center '>
                    <input className='shadow-sm border border-white bg-light' type="text" placeholder='Name' />
                    <input className='shadow-sm border border-white bg-light' type="email" name="email" id="" placeholder='Email' />
                    <input className='shadow-sm border border-white bg-light' type="password" name="password" id="" placeholder='Password' />
                    <input className='shadow-sm border border-white bg-light' type="password" name="confirmPassword" id="" placeholder='Confirm Password' />
                    <input className='shadow-sm border border-white bg-danger text-white' type="submit" value="Sign Up" />
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;