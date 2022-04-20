import React from 'react'
import "./Basket.css"
import BasketProduct from './BasketProduct'
import ProductTotal from './ProductTotal'
import FlipMove from 'react-flip-move';
import { useStateProvider } from './StateProvider'
function Basket() {
    const [{basket}]=useStateProvider();
    return (
        <div className="basket" >
            
             <div className="basket__left" >
                <img
                className="addimg"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_LPHero_TopCat_en_US.png"
                alt="add"
                />
                <div className="">
                   
                {
                    basket.map((item)=>(
                        <BasketProduct
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        rating={item.rating}
                        img={item.img}
                        price={item.price}
                        />
                    ))
                }
                
                </div>
            </div>
            <div className="basket__right" >
                <ProductTotal/>
            </div>
            
           
        </div>
    )
}

export default Basket

