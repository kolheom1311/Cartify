'use client';

import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import CartModal from '@/components/CartModal';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <CartModal />
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-16"
        variants={itemVariants} id='flyer'
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Welcome to Cartify
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Discover amazing products with our modern, intuitive shopping experience
            </motion.p>
            <motion.div variants={itemVariants} className='inline-block'>
              <Button
                className="inline-flex items-center bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200"
                onClick={() => {
                  const mainElement = document.getElementById('main');
                  mainElement?.scrollIntoView({behavior: 'smooth'})
                }}
              >
                <span>Shop Now</span>
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.main
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" id='main'
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products designed to enhance your lifestyle
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProductGrid />
        </motion.div>
      </motion.main>

      <motion.footer
        className="bg-gray-900 dark:bg-gray-950 text-white py-12"
        variants={itemVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Cartify</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">Your trusted e-commerce partner</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}