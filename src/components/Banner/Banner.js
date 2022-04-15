import React from 'react';
import banner from '../../images/images/bannerbackground.png'
import Search from '../Search/Search';
import './Bannner.css'

const Banner = () => {
    return (
        <div style=
            {{
                backgroundImage: `url(${banner})`,
                height: '80vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className='d-flex flex-column align-items-center justify-content-center'
        >
            <h1 className='banner-header'>BEST FOOD WAITING FOR YOU</h1>
            <Search></Search>
        </div>
    );
};

export default Banner;