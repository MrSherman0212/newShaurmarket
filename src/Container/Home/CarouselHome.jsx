import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './CarouselHome.css'

const CarouselHome = () => {
    return (
        <div className="container">
            <div className="carousel-control">
                <Carousel>
                    <Carousel.Item>
                        <img
                            width="700px"
                            className="d-block w-70"
                            src="http://sun9-51.userapi.com/impf/c845419/v845419958/c6075/QMVFUoJXNOc.jpg?size=604x224&quality=96&sign=571934e9d1a39d559fd66dca3dc5fb3e&type=album"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width="700px"
                            className="d-block w-70"
                            src="http://sun9-51.userapi.com/impf/c845419/v845419958/c6075/QMVFUoJXNOc.jpg?size=604x224&quality=96&sign=571934e9d1a39d559fd66dca3dc5fb3e&type=album"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width="700px"
                            className="d-block w-70"
                            src="http://sun9-51.userapi.com/impf/c845419/v845419958/c6075/QMVFUoJXNOc.jpg?size=604x224&quality=96&sign=571934e9d1a39d559fd66dca3dc5fb3e&type=album"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselHome;