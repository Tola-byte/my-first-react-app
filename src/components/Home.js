import Hero from './Hero';
import {Link} from 'react-router-dom'
import '../App.css'
import React from 'react'
import Navbar from './Navbar';
import Cards from './Cards';
import Products from './Products';
import Services from './Services';
import SignUp from './SignUp';
import Footer from './Footer';

function Home() {
  return (
    <>
    <Navbar />
     <Hero />
     <Cards/>
     <Footer />

    </>
  );
}

export default Home
  