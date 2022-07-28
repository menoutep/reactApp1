import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
const Home = () => {
    return (
        <div>
            <Logo></Logo>
            <Navigation />
            <Countries></Countries>
            <br />
            <h1>ACCEUILL</h1>
        </div>
    );
};

export default Home;