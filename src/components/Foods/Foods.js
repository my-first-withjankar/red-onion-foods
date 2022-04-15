import React from 'react';
import { Link } from 'react-router-dom';
import './Foods.css'

const Foods = () => {
    return (
        <>
            <nav className='mt-4 nav-link'>
                <Link to='breakfast'>Breakfast</Link>
                <Link to='lunch'>Lunch</Link>
                <Link to='dinner'>Di nner</Link>
            </nav>
        </>
    );
};

export default Foods;