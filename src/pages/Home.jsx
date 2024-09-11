import React from 'react'
import Top_Navbar from '../componets/Top_Navbar'
import Footer from '../componets/Footer'
import Main_Navbar from '../componets/logo_bar'
import ProductDetails from '../componets/ProductDetails'
import Main_Footer from '../componets/Main_Footer'
import Image_side from '../componets/Image_side'
import Offer_product from '../componets/Offer_product'
import Serach_bar from '../componets/Serach_bar'
import Top_Categories_Week from '../componets/Top_Categories_Week'
import Sale_page from '../componets/Sale_page'
import Women_Clothing from '../componets/Women_Clothing'
import Colletion from '../componets/Colletion'
import Trading_product from '../componets/Trading_product'


const Home = () => {
    return (
        <>
            <Top_Navbar />
            <Main_Navbar />
            {/* <Serach_bar /> */}
            <ProductDetails />
            <Offer_product />
            <Top_Categories_Week />
            <Sale_page />
            <Women_Clothing />
            <Colletion />
            <Trading_product />
            <Image_side />
            <Main_Footer />
            <Footer />
        </>
    )
}

export default Home
