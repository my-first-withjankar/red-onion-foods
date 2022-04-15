import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Foods></Foods>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Home;