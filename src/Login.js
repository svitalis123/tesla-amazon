import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase'
import {useHistory} from 'react-router-dom'

function LOgin() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
   const signin=(event)=>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth=>history.push('/')).catch(error=>alert(error.message))
   }
   const createvb=(event)=>{
       event.preventDefault();
       auth.createUserWithEmailAndPassword(email, password).then(auth=>{
         if(auth){  
            history.push('/')
         }
       }).catch(err=>alert(err.message))
   }
    return (
        
        <div className="login" >
          
            <div  className="login__container" >
             <img className="amazonlo" width="80px" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                <h2>Sign-In</h2>
                <form>
                   <span className="email"><span>Email </span> <input onChange={(e=>setEmail(e.target.value))} type="email" /></span>
                   <span className="password" ><span>Password </span> <input onChange={(e)=>setPassword(e.target.value)} type="password" /></span>
                    <div className="but" >
                        <button  onClick={signin}  >Login</button>
                    </div>
                    <p className="terms" >By continuing, you agree to Amazon's
                        <a href="#" >Conditions of Use</a> and <a href="#" >
                        Privacy Notice</a></p>

                </form>
                <hr/>
                <div className="thnew " >
                    <span className="sp" ></span><h5>new to amazon</h5><span></span>
                </div>
                <button  onClick={createvb} >Create New Account</button>
            </div>
        </div>
    )
}

export default LOgin
