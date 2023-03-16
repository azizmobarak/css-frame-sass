import React from 'react';
import './header.scss';
import logo from '../assets/images/logo.png';
import flagImage from '../assets/images/flag.png';
import faceImage from '../assets/images/face-user.jpeg';
import searchIcon from '../assets/svg/searchIcon.svg';
import notificationIcon from '../assets/svg/notification.svg';

export default function Header() {
    return (
        <div className='header flex-row border-shadow space-between'>
            <div className='flex-center w-10'>
                <img width='150px' height='45px' alt='logo' src={logo} />
            </div>
            <div className='flex-center w-40'>
                <div className='flex-start flex-row w-75 align-items-center input-container'>
                    <img className='search-icon' width={25} src={searchIcon} alt="search" />
                    <input className='search-input' placeholder='Quick search ...' type='text' />
                </div>
            </div>
            <div className='flex-center w-50'>
                <ul className='nav-list w-50'>
                    <li className="w-20">Dashboard</li>
                    <li className="w-20">Trainanigs</li>
                    <li className="w-20">Users</li>
                    <li className="w-20">
                        <select className='more-selector w-100' name="More" id="more">
                            <option selected value="India">More</option>
                            <option value="Sri Lanka">option 2</option>
                            <option value="Australia">option 3</option>
                        </select>
                    </li>
                </ul>
                <ul className='nav-list w-50'>
                    <li className='w-10'><img className='w-100' src={notificationIcon} alt='notification' /></li>
                    <li className='w-10'><img className='w-100'src={flagImage} alt='flag' /></li>
                    <li className='w-100'>
                        <ul className='nav-list w-100'>
                           <li>
                                <img className='user-pic w-10' src={faceImage} alt='user' />
                           </li>
                           {/* <li>
                                <p>user name</p>
                                <span>some discription</span>
                           </li> */}
                       </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
