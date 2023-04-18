import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavbarList = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-image: linear-gradient(to right, rgb(51, 51, 51), black, rgb(51, 51, 51));
    padding: 0 3rem;
    border-bottom: 2px solid gray;

    @media(max-width:565px){
        padding: 0 5px;
    }
`;
const NavbarListItem = styled.li`
    cursor: pointer;
    float: right;
`;
const NavbarListIcon = styled.li`
    float: left;
    cursor: pointer;
`;

const NavbarIcon = styled.img`
    height: 45px;
`;

function Header() {
    return (
        <div>
            <div>
                <NavbarList>
                    <NavbarListIcon>
                        <NavbarIcon src={'../assets/logo-black-transparent.png'}></NavbarIcon>
                    </NavbarListIcon>
                    <NavbarListItem>
                        <Link to='/contact' className='navItemLink'>CONTACT</Link>
                    </NavbarListItem>
                    <NavbarListItem>
                        <Link to='/projects' className='navItemLink'>PROJECTS</Link>
                    </NavbarListItem>
                    <NavbarListItem>
                        <Link to='/about' className='navItemLink'>OUR STORY</Link>
                    </NavbarListItem>
                    <NavbarListItem>
                        <Link to='/' className='navItemLink'>HOME</Link>
                    </NavbarListItem>
                </NavbarList>
            </div>
        </div>
    )
}

export default Header
