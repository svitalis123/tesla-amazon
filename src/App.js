import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Tesla from './Tesla';
import Amazon from './Amazon';
import Basket from './Basket';
import Login from './Login'
import Payment from './Payment'
import {auth} from './firebase'
import { useEffect } from 'react';
import { useStateProvider } from './StateProvider';
const promise=loadStripe('pk_test_51IMNwALPboT5SvvfVC5YOGEUfLg1ykYj9tFpNtfNdHOvoKRqM5PFYI7RGXyzr1mCl0HROdX12VtYUdmsJAytzs1u00aUmj2Mdb');
function App() {
  const [{},dispatch]=useStateProvider();
useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'authUser',
          user:authUser,
        })
      }else{
        dispatch({
          type:'authUser',
          user:null,
        })
      }
    })
},[])
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/tesla" >
          <Header/>
          <Tesla/>
        </Route>
        <Route path="/amazon" >
          <Header/>
          <Amazon/>
        </Route>
        <Route path="/basket" >
          <Header/>
          <Basket/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>
        <Route path="/payment" >
            <Header/>
            <Elements stripe={promise} >
               <Payment/>
            </Elements>    
        </Route>
        <Route path='/'>
         <Header/>
         <Home/>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
