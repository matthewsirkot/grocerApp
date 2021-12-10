import React from 'react';
import '../../App.css';

import IntroSection from '../IntroSection';
import Products from '../../Products/Products';
import Categories from '../../Categories/Categories';
import Reviews from '../../Reviews/Reviews';



function Home() {
    return (
       <>
           <IntroSection/>
           <Products/>
           <Categories/>
           <Reviews/>
       </>


    );
}

export default Home;