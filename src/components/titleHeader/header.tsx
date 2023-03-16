import React from 'react'
import './header.scss';
import TextGrayButton from '../buttons/textGrayButton';
import OrangeButton from '../buttons/orangeButton';

export default function Header() {
    return (
        <div className='flex-row w-75 space-between align-items-center'>
            <h1 className='h1'>
                Edit Training “Working At Height”
            </h1>
            <div className='flex-row space-around'>
                <TextGrayButton cssClass='mr-10' width={60} height={35} title='Cancel' />
                <OrangeButton width={120} height={35} title='Update & Save' />
            </div>
        </div>
    )
}
