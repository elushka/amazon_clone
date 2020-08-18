import React from 'react';
import "./Home.css";
import Product from '../Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />
            <div className="home__row">
                <Product
                    id="123456"
                    title="Midnight Sun"
                    price={19.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="123456"
                    title="Midnight Sun"
                    price={19.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123456"
                    title="Midnight Sun"
                    price={19.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="123456"
                    title="Midnight Sun"
                    price={19.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="123456"
                    title="Midnight Sun"
                    price={19.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123456"
                    title="Midnight Sun"
                    price={19.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
