import React from 'react'
import Accesories from './Accesories'
import More from './More'
import './Home.css'
import { Slide } from './car'
function Home() {
    
    return (
        <div className="home" >
            
            <div className="home__container" >
                    <Accesories/>
                    
                   
            </div>
            
            <div className="home__slide">
             
             <Slide />
                
               
            </div>
            
        </div>
    )
}

export default Home
