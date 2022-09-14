
import React, {useState} from 'react';
import ShowPart from './components/SecondPart/ShowPart';
import ThirdProducts from './components/ThirdPart/ThirdProducts';
import './App.css';

const allProducts = [
	{
		id: 'e1',
		title: "ကြက်သား",
		price: 1000,

	},
	{
		id: 'e2',
		title: "Potato",
		price: 20000,

	},
	{
		id: 'e3',
		title: "Mango",
		price: 12000,

	},
	{
		id: 'e4',
		title: "ဝက်သား",
		price: 11000,

	},
	{
		id: 'e5',
		title: "ခရမ်းသီး",
		price: 3000,

	},
	{
		id: 'e6',
		title: "ပန်းသီး",
		price: 2000,

	},
	{
		id: 'e7',
		title: "Orange",
		price: 2000,

	},
]


const App = () => {
 

  return (
    <div className=''>
      <div className='row'>

	  		<div className="col-1 border-right p-0">

			</div>

	  		<div className="col-2 border-right product_background_color">
				<ShowPart products={allProducts}/>
			</div>

			<div className="col-1 ">
				<ThirdProducts />
			</div>

      </div>
    </div>
  );
}

export default App;
