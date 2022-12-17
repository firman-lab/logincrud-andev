import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <div className='h-screen'>
            <section className='container mx-auto'>
                <Navbar title='Sign Up' href='#' />
            </section>
            <section className='container mx-auto pt-10 px-4'>
                <LoginForm />
                {/* <RegisterForm /> */}
            </section>
        </div>
    );
}

export default Login;
