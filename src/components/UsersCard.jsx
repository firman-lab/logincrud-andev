import React from 'react';
import ProfileList from './ProfileList';
// import {
//     useDeleteUserMutation,
//     useGetAllUsersQuery,
// } from '../features/api/apiSlice';

function UsersCard() {
    return (
        <div className='w-full m-4 max-w-2xl p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex items-center justify-between mb-4'>
                <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Engineer Profile
                </h5>
                <button className='text-sm font-semibold bg-indigo-800 text-white px-3 py-2 rounded-md hover:bg-indigo-700 dark:text-blue-500'>
                    Add {'>>>'}
                </button>
            </div>
            <div className='mx-auto'>
                <ul
                    role={'list'}
                    className='divide-y divide-gray-200 dark:divide-gray-700'
                >
                    <ProfileList />
                </ul>
            </div>
        </div>
    );
}

export default UsersCard;
