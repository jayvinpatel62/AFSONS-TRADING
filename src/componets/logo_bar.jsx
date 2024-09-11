import { Container } from '@mui/material'
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Main_Navbar = () => {
    return (
        <>
             <div className='my-container'>
                <div className=' flex footer h-[100px] justify-between'>
                    <div className=''>
                        <img className='' src={require("../image/logo.png")} w alt="" />
                    </div>
                    <div>
                        <ul className=' flex gap-14 font-semibold'>
                            <li>Home</li>
                            <li>Pages</li>
                            <li>Shop</li>
                            <li>Blog</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                    <div className=' flex text-[35px] gap-5' >

                        <FaRegHeart />
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_Navbar
