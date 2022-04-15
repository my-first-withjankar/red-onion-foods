import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/images/logo2.png'
import './Header.css'


const Header = () => {
    return (
        <Navbar className='sticky-top bg-white'>
            <Container>
                <Link to='/'>
                    <img height={'30px'} src={logo} alt="" />
                </Link>
                <Nav className="ms-auto">
                    <Link className='text-decoration-none header-link me-5' to='/cart'>cart</Link>
                    <Link className='text-decoration-none header-link me-5' to='/login'>Sign in</Link>
                    <Link className='text-decoration-none header-link me-5' to='/signup'>Sign up</Link>
                </Nav>
            </Container >
        </Navbar >
    );
};

export default Header;