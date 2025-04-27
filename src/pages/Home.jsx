import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Link className='block border p-2 m-2' to="/login">Login</Link>
            <Link className='block border p-2 m-2' to="/register">Register</Link> 
        </div>
    );
};

export default Home;