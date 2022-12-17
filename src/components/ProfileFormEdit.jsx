import React, { useState, useEffect } from 'react';
import { useUpdateUserMutation } from '../features/api/apiSlice';
import fieldErrors from '../helpers/fieldErrors';
import Input from './Form/Input';

function ProfileFormEdit(props) {
    const [updateUser, { isLoading }] = useUpdateUserMutation();

    const [state, setState] = useState({
        name: '',
        email: '',
        rate: 0,
        id: '',
    });

    const [errors, seterrors] = useState(null);

    useEffect(() => {
        setState({
            name: props.name,
            email: props.email,
            rate: props.rate,
            id: props.id,
        });
    }, []);

    function onChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const edit = (e) => {
        e.preventDefault();
        console.log(state.id);
        // const formData = new FormData();
        // formData.append('name', state.name)
        // formData.append('emai', state.email)
        // formData.append('rate', state.rate)
        updateUser({
            id: state.id,
            user: {
                name: state.name,
                email: state.email,
                rate: state.rate,
            },
        });
    };

    const ERRORS = fieldErrors(errors);

    return (
        <div className='w-full m-4 max-w-md px-4 border rounded-md shadow-md p-3'>
            <div className='flex items-center justify-between mb-4'>
                <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Form
                </h5>
                <a
                    href='#'
                    className='text-sm font-medium text-indigo-600 hover:underline'
                ></a>
            </div>
            <div className='mx-auto'>
                {/* {isLoading ? (
                    <p>Loading...</p>
                ) : ( */}
                <form onSubmit={edit}>
                    <Input
                        value={state.name}
                        error={ERRORS?.(state.name)?.message}
                        name='name'
                        onChange={onChange}
                        placeholder='Namamu'
                        labelName='Full Name'
                    />
                    <Input
                        value={state.email}
                        error={ERRORS?.(state.email)?.message}
                        name='email'
                        type='email'
                        onChange={onChange}
                        placeholder='Emailmu'
                        labelName='Email'
                    />
                    <Input
                        value={state.rate}
                        error={ERRORS?.(state.rate)?.message}
                        name='rate'
                        onChange={onChange}
                        placeholder='Rate'
                        labelName='Rate'
                    />
                    <button className='w-full place-content-center bg-indigo-700 hover:bg-indigo-600 font-semibold text-white p-3 rounded-lg'>
                        {isLoading ? 'Wait...' : 'Update'}
                    </button>
                </form>
                {/* )} */}
            </div>
        </div>
    );
}

export default ProfileFormEdit;
