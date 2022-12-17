import React, { useEffect, useState } from 'react';
// import { useTheme } from 'next-themes';

const navigation = [
    { name: 'Product', href: '#product' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
    { name: 'About', href: '#about' },
];

export default function Navbar(props) {
    const [enabled, setEnabled] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    const changeToggle = () => {
        if (theme === 'light') {
            setTheme('dark');
            setEnabled(true);
        } else {
            setTheme('light');
            setEnabled(false);
        }
    };

    useEffect(() => {
        setEnabled(theme === 'dark' ? true : false);
        console.log('theme:', theme);
    }, [theme]);

    return (
        <>
            <div className='relative px-4 pt-6 sm:px-6 lg:px-8'>
                <nav
                    className='relative flex items-center justify-between sm:h-10 xl:justify-start'
                    aria-label='Globals'
                >
                    <div className='flex flex-shrink-0 flex-grow items-center justify-center lg:flex-grow-0'>
                        <div className='flex w-full items-center justify-between md:w-auto'>
                            <a href='/'>
                                <span className='sr-only'>Fist Mousea</span>
                                <img
                                    alt='Fist Mousea'
                                    className='h-8 w-auto sh:h-10'
                                    src='/icons/logo.svg'
                                />
                            </a>
                        </div>
                    </div>
                    <div className='hidden md:ml-10 md:flex md:items-center md:space-x-8 md:pr-4 my-auto'>
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className='font-semibold align-middle text-gray-400 hover:text-gray-200'
                            >
                                {item.name}
                            </a>
                        ))}

                        {enabled === true ? (
                            <button
                                onClick={changeToggle}
                                className='bg-indigo-800 hover:bg-indigo-700 text-indigo-800 rounded-xl p-2 text-xs'
                            >
                                <span>
                                    <img
                                        className='text-cyan-50 w-5'
                                        src='/icons/sun_light.svg'
                                        alt='Dark'
                                    />
                                </span>
                            </button>
                        ) : (
                            <button
                                onClick={changeToggle}
                                className='bg-indigo-800 hover:bg-indigo-700 text-indigo-200 rounded-xl p-2 text-xs'
                            >
                                <span>
                                    <img
                                        className='text-cyan-50 w-5'
                                        src='/icons/moon_dark.svg'
                                        alt='Dark'
                                    />
                                </span>
                            </button>
                        )}
                        <a
                            href={props.href}
                            type='button'
                            onClick={props.action}
                            className='font-semibold text-indigo-600 bg-indigo-100 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-md'
                        >
                            {props.title}
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}
