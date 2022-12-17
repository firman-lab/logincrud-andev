import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Users from '../pages/Users';

function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/users' element={<Users />} />
        </Routes>
    );
}

export default Router;
