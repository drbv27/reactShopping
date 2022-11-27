import React, { useState, useEffect } from 'react'

import Header from '../components/header'
import Product from '../components/product'
import { getByTestId } from '@testing-library/react'

const API = 'https://shopping-node.vercel.app/api/product'

const getProduct =  async (setProduct, id) => {
    try {
        const result = await fetch(API + '/' + id )
        const product = await result.json()
        setProduct(product)
    } catch (error) {
        console.error('no se pudo obtener el producto', error)
    }
}

const Detail = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const id = props.match.params.id
        getProduct(setProduct, id)
    }, [props])

    return (
        <React.Fragment>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <Product {...product} />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Detail
