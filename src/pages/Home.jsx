import React, { useContext } from 'react'
import Layout from '../components/Layout'
import myContext from '../context/data/myContext'
import HeroSection from '../components/heroSection'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'
import Testimonial from '../components/Testimonial'
import Track from '../components/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/cartSlice'





function Home() {
  const dispatch = useDispatch();
  const cartItem= useSelector((state)=> state.cart)
  console.log(cartItem);
  const context = useContext(myContext)
  
 
  return (

    <Layout>
      
     <HeroSection/>
     <Filter/>
     <ProductCard/>
     <Track/>
     <Testimonial/>
    </Layout>


  )
}

export default Home