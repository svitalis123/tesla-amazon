import React, { useEffect, useState } from 'react'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll';
import './Payment.css'
import axios from './axio'
import { useStateProvider } from './StateProvider';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import BasketProduct from './BasketProduct';
import CurrencyFormat from 'react-currency-format'
import { getProductTotal } from './reducer';
import {db} from './firebase'

function Payment() {
    const [{basket, user}, dispatch]=useStateProvider()
    const stripe=useStripe();
    const elements = useElements();
    const [disabled, setDisabled]=useState(true);
    const [processing, setProcessing]=useState('');
    const [succeded, setSucceded]=useState(false)
    const [error, setError]=useState(null);
    const [clientSecret, setClientSecret]=useState(true);

    useEffect(()=>{
        const getClientSecret=async()=>{
            const pay= await axios({
                method:'post',
                url:`payments/create?total=${getProductTotal(basket)*100}`
            })
            setClientSecret(pay.data.clientSecret);
        }
        getClientSecret();
    },[basket])
    console.log(clientSecret);
    const handleSubmit=async(event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement),
            }
        }).then(({paymentIntent})=>{

            db.collection('users').doc(user?.id).collection('orders').doc(paymentIntent?.id).set({mbasket:basket,amount:paymentIntent.amount,created:paymentIntent.created,})
            console.log(paymentIntent.created);
            console.log(paymentIntent.amount);
            console.log(basket);
            setSucceded(true);
            setError(null)
            setProcessing(false);
           
        })
        
    }
    const handleChange=(event)=>{
        setDisabled(event.empty);
        setError(event.error?event.error.message :'');

    }
    return (
        <div className="payment" >
            <div className="payment__container" >
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" >
                    <h2>{user?.email} CheckOut</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' >
                    <h5>Checkout <span>:{basket?.length}</span></h5>

                </ScrollAnimation>
                <div className="payment__section" >
                    <div className="title" >
                        Delivery details
                    </div>
                    <div className="address" >
                        <p>Email : {user?.email}.</p>
                        <p>Address : P.O.Box 602000 NAIROBI.</p>

                    </div>
                </div>
                <div className="payment__section" >
                    <div className="title" >
                            ORDERS 
                    </div>
                    <div className="orders" >
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
                <div className="payment__section" >
                    <div className="title" >
                        Payment details
                    </div>
                    <div className="paymentv" >
                            <form onSubmit={handleSubmit} >
                                <CardElement onChange={handleChange} />
                                <div className="payment__card" >
                                    {
                                      <CurrencyFormat
                                      renderText={(value)=>(
                                          <>
                                             <h3>Items:{basket?.length} Total: {value}</h3>           
                                          </>
                                      )}
                                      value={getProductTotal(basket)}
                                      prefix="$"
                                      displayType="text"
                                      thousandSeparator={true}
                                      decimalScale={2}


                                      />  
                                    }
                                    <button disabled={disabled || processing || succeded} >
                                       {processing ? 'processing' : 'Pay Now'} 
                                    </button>

                                </div>
                                {error && <span>{error}</span>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
