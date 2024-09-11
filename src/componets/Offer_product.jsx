import { Container } from '@mui/material'
import React from 'react'

const Offer_product = () => {
    return (
        <>
            <div className='py-[100px]'>
            <div className='my-container'>
                    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <img src={require("../image/product.jpg")} className='me-0' alt="" />
                        <img src={require("../image/offer_product_1.png")}  className='me-0' alt="" />
                        <img src={require("../image/offer_product_2.jpg")}  className='me-0' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer_product
