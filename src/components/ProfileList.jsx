import React from 'react';
import {
    useDeleteUserMutation,
    useGetAllUsersQuery,
} from '../features/api/apiSlice';
import ProfileFormEdit from './ProfileFormEdit';

function ProfileList() {
    const { data: Users, isLoading } = useGetAllUsersQuery();
    const [delUser] = useDeleteUserMutation();
    // console.log(Users);

    const [idEdit, setIdEdit] = React.useState('');

    {
        if (isLoading) {
            return (
                <div className='w-full flex justify-center mt-12'>
                    <p className='text-lg font-meduim'>Loading..</p>
                </div>
            );
        }
    }
    return Users.map((user) => (
        <li className='py-3 sm:py-4' key={user.id}>
            <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                    <img
                        className='w-12 h-12 rounded-full'
                        src={user.avatar}
                        alt='Neil image'
                    />
                </div>
                <div className='flex-1 min-w-0'>
                    <p className='text-sm font-semibold text-gray-900 truncate dark:text-white'>
                        {user.name}
                    </p>
                    <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                        {user.email}
                    </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                    {`$${user.rate.toString()}`}
                </div>
                <button
                    onClick={() => setIdEdit(user.id)}
                    disabled={idEdit === user.id ? true : false}
                    className='bg-indigo-700 disabled:bg-slate-600 text-white transition-all hover:bg-indigo-800 font-medium px-2 py-1 rounded-md text-sm'
                >
                    Edit
                </button>
                <button
                    onClick={() => {
                        delUser(user.id);
                    }}
                    className='bg-red-700 items-center font-medium transition-all hover:bg-red-800 text-white px-2 py-1 rounded-md text-sm'
                >
                    Hapus
                </button>
            </div>
            <div className={idEdit != user.id ? 'hidden' : ''}>
                <div className='flex'>
                    <ProfileFormEdit
                        name={user.name}
                        email={user.email}
                        rate={user.rate}
                        id={user.id}
                    />
                    <button
                        onClick={() => setIdEdit('')}
                        className='p-3 bg-red-700 text-white rounded-md hover:bg-red-800'
                    >
                        x
                    </button>
                </div>
            </div>
        </li>
    ));
    // return <div>OK</div>;
}

export default ProfileList;
