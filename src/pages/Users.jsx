import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProfileForm from '../components/ProfileForm';
import UsersCard from '../components/UsersCard';
import { useNavigate } from 'react-router-dom';

function Users(props) {
    useEffect(() => {
        const check = JSON.parse(localStorage.getItem('token'));
        if (!check) {
            navigate('/');
        }
    }, []);

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <li className='py-3 sm:py-4'>
            <div className='h-screen'>
                <section className='container mx-auto'>
                    <Navbar title='Log out' action={logout} />
                </section>
                <section className='container mx-auto pt-10 px-4'>
                    <div className='flex flex-wrap justify-center'>
                        <UsersCard />
                        <ProfileForm />
                    </div>
                </section>
            </div>
        </li>
    );
}

export default Users;
