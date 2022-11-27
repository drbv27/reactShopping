import React from 'react'

const Product = (props) => {

    const { _id, image, name, price, description } = props

    return (
        <div className="card h-100">
            <a href={`/product/${_id}`}>
                <img className="card-img" src={image} alt={name} />
            </a>
            <div className="card-body">
                <h4 className="card-tittle">
                    <a href={`/product/${_id}`}>{name}</a>
                </h4>
                <h5>${price}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default Product
