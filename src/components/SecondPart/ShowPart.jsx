import React from 'react';
import SingleProducts from './SingleProducts';
import './ShowPart.css';

const ShowPart = (props) => {
  return (
       
        <div className="product_list_row">
            {props.products.map((product) => {
                return (

                    <SingleProducts 
                     key={product.id}
                     title={product.title}
                     price={product.price}
                    />
                )
            })}
        </div>
  )
}

export default ShowPart