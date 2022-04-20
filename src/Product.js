import React from 'react'
import './Product.css'
import { useStateProvider } from './StateProvider';
function Product({id,title,description,img,price,rating}) {
    const [{basket}, dispatch]=useStateProvider();
    const addBasket=(event)=>{
        event.preventDefault();
        dispatch({
            type:"AddToBasket",
           item:{
            id:id,
            title:title,
            description:description,
            img:img,
            price:price,
            rating:rating
           }
        })
    }
    return (
        <div className="product" >
           <div className="container" >
           <div className="product__top" >
                <div className="title" >
                    {title}
                </div>
                <span className="desription" >
                   {description}
                </span>
                <span className="price" >${price}</span>
                <div className="rating" >
                    {
                   Array(rating).fill().map((_,i)=>(
                       <p>⭐</p>
                   ))
                    }
                   
                </div>
            </div>
            <img
            className="product__img"
            src={img}
            alt="product"
            />
            <button onClick={addBasket} className="product__button" >
                add to basket
            </button>
           </div>
        </div>
    )
}

export default Product
