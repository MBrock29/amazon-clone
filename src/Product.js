import React from 'react'
import "./Product.css"
import Star from '@material-ui/icons/Star'

export default function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>£</small>
                <strong>{price}</strong>
                </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p><Star className="product__star"/></p>
                    ))
                }
                </div>        
        <img src={image} alt="" /> 
        <button>Add to basket</button> 
        </div>
    )
}
