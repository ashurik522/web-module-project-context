import React from 'react';

const Product = props => {
	return (
		// UI for products in data set
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>
			{/* addItem function passed down from app.js - adds item to cart state */}
			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
