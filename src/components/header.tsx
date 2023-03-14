import React from 'react';
import './header.scss';
import logo from '../assets/images/logo.png';

export default function Header() {
    return (
        <div className='header flex-row border-shadow space-between'>
            <div className='flex-center w-20'>
                <img width='150px' height='45px' alt='logo' src={logo} />
            </div>
            <div className='flex-center w-30'>
                <input className='w-30' type='text' />
            </div>
            <div className='flex-center w-30'>

            </div>
            <div className='flex-center w-30'>

            </div>
        </div>
    )
}
