import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CarouselHome from './CarouselHome';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div>
            <Header />
            <CarouselHome />
            <ProductList />
            <Footer />
        </div>
    );
};

export default Home;