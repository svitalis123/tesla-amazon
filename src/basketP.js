import React,{forwardRef} from 'react'
import './BasketProduct.css'

const BasketProduct=forwardRef(({id,title,description,rating,img,price}, ref)=>(
    
 <div className="basketproduct" ref={ref} >
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
))

export default BasketProduct
