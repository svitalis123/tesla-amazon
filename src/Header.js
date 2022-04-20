import React from 'react'
import './Header.css'
import teslalogo from './assets/teslaLogoSmall.svg'
import {Link, useHistory} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateProvider } from './StateProvider';
import {auth} from './firebase'
function Header() {
    const [{basket, user}, dispatch]=useStateProvider();
    const history=useHistory();
    const userAuthentcate=()=>{
        if(user){
        auth.signOut();
        }
    }
    const signin=()=>{
        history.push("/login")
    }
    const pathBasket=()=>{
        history.push("/basket")
    }
    const tesla=()=>{
        history.push("/tesla")
    }
    const amazon=()=>{
        history.push("/amazon")
    }
    const home=()=>{
        history.push("/")
    }
    const thepush=()=>{
        history.push(!user && "/login");
    }
    console.log(basket);
    console.log(user);
    return (
        <div className="header" >
           <div className="header__container" >
               <div className="home__first" >
               <h3 onClick={home} >Home</h3>
               </div>
                <div className="header__middle" >
                   
                    <input type="text" />

                </div>
                <div className="header__bar" >
                    <div className="header__title" >
                        <h3 onClick={tesla} >tesla</h3>
                        <img className="teslalog" width="30px" src={teslalogo} alt="teslalogo"/>
                    </div>
                    <div className="header__title" >
                        <h3 onClick={amazon} >Amazon</h3>
                        <img className="amazonlogo" width="35px" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                    </div>
                    
                    <div onClick={thepush}  onClick={userAuthentcate} onClick={signin} className="header__title" >
                        <span className="header__title1" >
                            hello {user?user?.email:'user'}
                        </span>
                        <span className="header__title2" >
                            {user?'Signout':'Signin'}
                        </span>
                    </div>
                    

                    <div className="header__title" >
                    <span className="header__title1">
                            orders
                        </span>
                        <span className="header__title2">
                            &returns
                        </span>
                    </div>
                    <div className="header__title" >
                        
                       <div onClick={pathBasket} className="basket" >
                       <ShoppingBasketIcon/><p>{basket?.length}</p>
                       </div>
                        
                    </div>

                </div>
           </div>
        </div>
    )
}

export default Header

