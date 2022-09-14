import React, { useState } from 'react';
import './ProductsForm.css';

const ProductsForm = (props) => {
    const [enterTitle, setTitle] = useState("");
    const [enterPrice, setPrice] = useState("");
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newProducts = {
           
            title: enterTitle,
            price: enterPrice,
        };
        props.addNewProducts(newProducts);
        setTitle("");
        setPrice("");
    };
  return (
    <form action="" className="form-mt" onSubmit={submitHandler}>
        <div className="row center product_name mb">
            <div className="col-1">
                <span>Product Name</span>
            </div>
            :
            <div className="col-2">
                <input 
                    type="text" 
                    className="name_box ml-2" 
                    onChange={titleChangeHandler} 
                    value={enterTitle} />
            </div>
        </div>
        <div className="row center product_name mb">
            <div className="col-1">
                <span>Product Price</span>
            </div>
            :
            <div className="col-2">
                <input 
                    type="number" 
                    className="name_box ml-2" onChange={priceChangeHandler} 
                    value={enterPrice} />
            </div>
        </div>
        <div>
            <button className="create_btn" type="submit">Create</button>
        </div>
    </form>
  )
}

export default ProductsForm;