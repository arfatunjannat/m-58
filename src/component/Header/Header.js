import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className='navbar'>
            <Link to="/home">Home</Link>
            
        <Link to="/register">Register</Link>
        <Link to="/shipping">Shipping</Link>
        <Link to="/placeOrder">PlaceOrder</Link>
        <Link to="/login">Login</Link>
            <p>{user.displayName}</p>
            {user?.email && <button onClick={logOut}>log out</button>}


        </div>
    );
};

export default Header;