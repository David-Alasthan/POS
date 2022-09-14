import React from 'react';
import './ThirdProducts.css';

const ThirdProducts = () => {
  return (
    
    <form action="" class="form-mt">
        <div class="row center product_name mb">
            <div class="col-1">
                <span>Product Name</span>
            </div>
            :
            <div class="col-2">
                <input type="text" class="name_box ml-2" />
            </div>
        </div>
        <div class="row center product_name mb">
            <div class="col-1">
                <span>Product Price</span>
            </div>
            :
            <div class="col-2">
                <input type="number" class="name_box ml-2" />
            </div>
        </div>
        <div>
            <button class="create_btn" type="button">Create</button>
        </div>
    </form>

  )
}

export default ThirdProducts