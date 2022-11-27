import React, { useState, useEffect } from 'react'

import Header from '../components/header'
import Product from '../components/product'

const API = 'https://shopping-node.vercel.app/api/product'

const getProducts = async (setProducts) => {
    try {
        const results = await fetch(API)
        const products = await results.json()
        setProducts(products)
    } catch (error) {
        console.error('Could not fetch products ;(', error)
    }
}

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts(setProducts)
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    {products.map(product =>
                        <div key={product._id}  className="col-md-4 col-sm-6 mb-4">
                            <Product{...product} />
                        </div>

                    )}
                </div>
            </div>

        </React.Fragment>
    )
}

export default Home
