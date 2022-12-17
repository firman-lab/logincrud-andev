import React, { useState, useEffect } from 'react';
import setLogin from '../features/api/apiconfig';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    function onChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        const check = JSON.parse(localStorage.getItem('token'));
        if (check) {
            navigate('/users');
        }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...state,
        };
        if (!state.username || !state.password) {
            alert('username password salah');
        } else {
            const response = await setLogin(data);
            if (response.error) {
                alert(response.message);
            } else {
                // alert('login success');
                localStorage.setItem(
                    'token',
                    JSON.stringify({
                        token: response.data.token,
                    })
                );
                console.log('data', response.data);
                navigate('/users');
            }
        }
    };
    return (
        <div className='flex justify-center items-center pb-24'>
            <div className='w-full lg:w-3/12'>
                <h1 className='text-4xl text-gray-900 dark:text-gray-200 mb-6'>
                    <span className='font-bold'>Continue</span> Study, <br />
                    Finish your <span className='font-bold'>Goals</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className='flex flex-col mb-4'>
                        <label
                            htmlFor='Username'
                            className='text-lg mb-2 dark:text-gray-200'
                        >
                            Username
                        </label>
                        <input
                            name='username'
                            onChange={onChange}
                            className='bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-indigo-600 rounded-md dark:bg-gray-700 dark:focus:border-gray-400'
                            //   value={}
                            placeholder='Your username'
                        />
                    </div>

                    <div className='flex flex-col mb-4'>
                        <label
                            htmlFor='password'
                            className='text-lg mb-2 dark:text-gray-200'
                        >
                            Password
                        </label>
                        <input
                            name='password'
                            type='password'
                            onChange={onChange}
                            className='bg-white focus:outline-none border px-6 py-3 w-full border-gray-600 focus:border-indigo-600 rounded-md dark:bg-gray-700 dark:focus:border-gray-400'
                            //   value={}
                            placeholder='Your password'
                        />
                    </div>

                    {/* <a href='/'> */}
                    <button
                        type='submit'
                        className='bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full font-semibold rounded-md'
                    >
                        Log in
                    </button>
                    {/* </a> */}
                </form>
            </div>

            <div className='w-2/12 hidden lg:block'></div>

            <div className='w-5/12 hidden lg:block md:w-justify-end pt-24 pr-16'>
                <div
                    className='relative md:block'
                    style={{ width: 369, height: 440 }}
                >
                    <div
                        className='absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0 md:block rounded-md'
                        style={{ width: 324, height: 374 }}
                    ></div>
                    <div className='absolute w-full h-full -mb-8 -ml-8'>
                        <img
                            src='/images/tamara-caem.jpg'
                            alt='Mbak tamara caem juga'
                            className='rounded-md'
                        />
                    </div>
                    <div
                        className='absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12 border-2 border-indigo-200 rounded-md'
                        style={{ width: 290 }}
                    >
                        <p className='text-gray-900 mb-2'>Account Login!!!</p>
                        <span className='text-gray-600 font-semibold'>
                            username: kminchelle
                            <br /> pass: 0lelplR
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
