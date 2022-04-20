import React from 'react'
import "./ProductTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateProvider } from './StateProvider'
import { getProductTotal } from './reducer';
import {useHistory} from 'react-router-dom'
function ProductTotal() {
    const [{basket}]=useStateProvider();
    const history=useHistory();
    const checkOut=(event)=>{
        event.preventDefault();
        history.push('/payment')
    }
    return (
        <div className="producttotal" >
            <CurrencyFormat
                
                    renderText={(value)=>(
                        <>
                            <div className="divtotal" >
                                <h3>Aggregate</h3>
                                <p>Total (Items:{basket?.length}):<span>{value}</span></p>

                            </div>
                        </>
                    )}
                    value={getProductTotal(basket)}
                displayType="text"
                prefix="$"
                thousandSeparator={true}
                decimalScale={2}
            />
            <button className="theButton" onClick={checkOut}  type="submit" >CheckOut</button>
        </div>
    )
}

export default ProductTotal
