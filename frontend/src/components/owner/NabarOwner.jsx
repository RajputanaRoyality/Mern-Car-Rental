import React from 'react'
import { assets, dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {

    const {user} = useAppContext;

  return (
    <div className='flex items-center justify-between px-6 md:px:10 h-16 border-b border-borderColor text-gray-500 transition-all'>
        <Link to="/">
            <img src={assets.logo} alt="logo" className='h-7' />
        </Link>
        <p>Welcome, {user?.name || "Owner"}</p>
    </div>
  )
}

export default NavbarOwner