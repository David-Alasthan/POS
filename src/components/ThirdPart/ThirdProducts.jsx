import React, {useState} from 'react';
import ProductsForm from './ProductsForm';
import './ThirdProducts.css';

const ThirdProducts = (props) => {
    const saveNewProduct = (enterNewProducts) => {
        const addNewProduct = {
            ...enterNewProducts,
            id: `e${props.allProduct.length + 1}`,
        };
        props.productHandlers(addNewProduct);
    };
  return (
    <div className="col-1 ">
			<ProductsForm addNewProducts={saveNewProduct} />	
	</div>

  )
}

export default ThirdProducts;