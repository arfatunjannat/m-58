import React from 'react';
import useAuth from '../../Hooks/useAuth';
const Home = () => {
    const {user} = useAuth();
    return (
        <div>
           <h1>this is home</h1>
          <h1>user:{user.displayName}</h1> 
        </div>
    );
};

export default Home;