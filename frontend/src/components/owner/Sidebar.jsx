import React, { useState } from 'react'
import {  assets, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Sidebar = () => {

    const {user,axios,fetchUser} = useAppContext()
    const location = useLocation()
    const [image, setImage] = useState('')

    const updateImage = async () => {
        try{
            const formData = new FormData()
            formData.append('image',image)

            const {data} = await axios.post('/api/owner/update-image',formData)

            if(data.success){
                fetchUser()
                toast.success(data.message)
                setImage('')
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
    }


    return (
        <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm bg-amber-200'>
            <img className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' src={image ? URL.createObjectURL(image) : user?.image} alt="sidebar" />
            <input type="file" id='image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])} />

            {image && (
                <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'
                onClick={updateImage}>
                    Save <img src={assets.check_icon} width={13} alt="" />
                </button>
            )}

            <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

            <div className='w-full'>
                {ownerMenuLinks.map((link, index) => (
                    <NavLink key={index} to={link.path} className={({ isActive }) => `realative flex items-center max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6
                text-gray-400 ${link.path === location.pathname ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}>


                        <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt="car icon" className='min-h-6 min-w-6' />
                        <span className='max-md:hidden'>{link.name}</span>
                        <div className={`${link.path === location.pathname && 'bg-primary'} w-1.5 h-8 rounded-l right-0 absolute`}></div>


                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar