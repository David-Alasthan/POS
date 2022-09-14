import React from 'react';
import './SingleProducts.css';

const SingleProducts = (props) => {
 
        return (

        <div className="width-10 single_product">
            <h3>{props.title}</h3>
            <p>{props.price} MMK</p>
            <button className="add_to_cart">Add To Cart</button>
        </div>
        
        
        )
    
}

export default SingleProducts