import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../Context/ClientContext';
import ProductCard from './ProductCard';
import './ProductList.css'

export default function ProductList() {
    const { getProducts, products } = useContext(clientContext)
    const history = useHistory()

    let search = new URLSearchParams(history.location.search)
    const [searchWord, setSearchWord] = useState(search.get('q') || '')
    function handleSearchInput(params, value) {
        setSearchWord(value)
        search.set(params, value)
        search.set("_page", 1);
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
    }

    useEffect(() => {
        getProducts(history)
    }, [searchWord])

    return (
        <><div className="container">
            <div className="wrapper">
                <div className="product-list">
                    <span className="product-title">Шаурма</span>
                    <input className="searchbar" type="text" placeholder="Поиск"
                        onChange={(e) => handleSearchInput("q", e.target.value)}
                    />
                    <div className="product-list__main">
                        {
                            products ? (
                                products.length ? (
                                    products.map(product => product.category === "Шаурма" ? <ProductCard key={product.id} product={product} /> : null)
                                ) : (
                                    <h1>Empty</h1>
                                )
                            ) : (
                                <h1>loading...</h1>
                            )
                        }
                    </div>
                    <div className="product-title">Напитки</div>
                    <div className="drink-list__main">
                        {
                            products ? (
                                products.length ? (
                                    products.map(product => product.category === "Напитки" ? <ProductCard key={product.id} product={product} /> : null)
                                ) : (
                                    <h1>Empty</h1>
                                )
                            ) : (
                                <h1>loading...</h1>
                            )
                        }
                    </div>
                    <div className="product-title">Другое</div>
                    <div className="other-list__main">
                        {
                            products ? (
                                products.length ? (
                                    products.map(product => product.category === "Другое" ? <ProductCard key={product.id} product={product} /> : null)
                                ) : (
                                    <h1>Empty</h1>
                                )
                            ) : (
                                <h1>loading...</h1>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};