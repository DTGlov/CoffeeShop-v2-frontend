import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';

import { motion } from 'framer-motion';
// import { useSelector } from 'react-redux';

function HomePage() {
  // const user = useSelector((state) => state.authReducer);
  // if (user) {
  //     console.log("this is the user cred", user);
  // }

  useEffect(() => {
    handleScrollPosition();
  }, []);

  //function to maintain scroll position of productList on the HomePage
  const handleScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem('scrollPosition');
    }
  };

  //click event passed to view button on product card on Homepage
  const handleClick = (e) => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <main>
        <Hero />
        <ProductList handleClick={handleClick} />
        <Footer />
      </main>
    </motion.div>
  );
}

export default HomePage;
