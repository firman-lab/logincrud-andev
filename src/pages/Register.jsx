import React from 'react';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';

function Register(props) {
    return (
        <div className='h-screen'>
            <section className='container mx-auto'>
                <Navbar title='Sign In' href='/' />
            </section>
            <section className='container mx-auto pt-10 px-4'>
                <RegisterForm />
            </section>
        </div>
    );
}

export default Register;
