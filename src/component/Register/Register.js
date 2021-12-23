import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>please Register</h3>
            <form>
                <input type="email" /> <br /> <br />
                <input type="password" /> <br /> <br />
                <input type="submit" value="submit"/> <br />
                <button>log out</button>


            </form>
            <br />
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Register;