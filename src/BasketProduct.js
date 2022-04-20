import React from 'react'
import './BasketProduct.css'
import { useStateProvider } from './StateProvider'
function BasketProduct({id,title,description,rating,img,price}) {
    const [{basket},dispatch]=useStateProvider();
    const removeBasket=(event)=>{
        event.preventDefault();
        dispatch({
            type:"RemoveBasket",
            id:id
        })
    }
    return (
        <div className="basketproduct" >
            <img
            src={img}
            alt="product"
            />
            <div className="basketproduct__top" >
                
                    <div className="basketproduct__upper" >
                        <h3>{title}</h3>
                        <div className="description" >
                            <p>{description}</p>
                        </div>
                        <h5>${price}</h5>
                        <div className="rating">
                        {
                            Array(rating).fill().map((_,i)=>(
                                <p>⭐</p>
                            ))
                        }
                        </div>
                     </div>
                      <div  >
                    <button className="basketproduct__btn" onClick={removeBasket}>
                        Remove The Basket
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default BasketProduct
