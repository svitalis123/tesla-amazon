import React from 'react'
import './Tesla.css'
import Item from './Item'
import acces from './assets/Desktop-Accessories.jpg'
import model3 from './assets/Desktop-Model3.jpeg'
import models from './assets/Desktop-ModelS.jpeg'
import modelx from './assets/Desktop-ModelX.jpeg'
import modely from './assets/Desktop-ModelY.jpeg'
import solarpanel from './assets/Desktop-SolarPanels.jpeg'
import solarroof from './assets/Desktop-SolarRoof.jpeg'
function Tesla() {
    return (
        <div className="tesla" >
            <Item
                img={models}
                title="MODEL S"
                des="order online for touchless delivery"
                leftitemtext="custom order"
                leftitemlink=""
                rightitemlink=""
                rightitemtext="existing inventory"
                twobuttons={true}
                arrodown
            />
            <Item
                img={modely}
                title="MODEL Y"
                des="order online for touchless delivery"
                leftitemtext="custom order"
                leftitemlink=""
                rightitemlink=""
                rightitemtext="learn more"
                twobuttons={true}
                
            />
            <Item
                img={model3}
                title="MODEL 3"
                des="order online for touchless delivery"
                leftitemtext="custom order"
                leftitemlink=""
                rightitemlink=""
                rightitemtext="existing inventory"
                twobuttons={true}
                
            />
            <Item
                img={modelx}
                title="MODEL X"
                des="order online for touchless delivery"
                leftitemtext="custom order"
                leftitemlink=""
                rightitemlink=""
                rightitemtext="existing inventory"
                twobuttons={true}
                
            />
            <Item
                img={solarpanel}
                title="Lowest Cost Solar Panels in America"
                des="money-back guarantee"
                leftitemtext="order now"
                leftitemlink=""
                rightitemlink=""
                rightitemtext="learn more"
                twobuttons={true}
            
            />
            <Item
                img={solarroof}
                title="Solar for New Roofs"
                des="solar roof costs less than a new roof plus solar panels"
                leftitemtext="order now"
                leftitemlink=""
                rightitemlink=""
                rightitemtext="learn more"
                twobuttons={true}
               
            />
            <Item
                img={acces}
                title="Accessories"
                des=""
                leftitemtext="Shop now"
                lefttitemlink=""
                rightitemlink=""
                rightitemtext=""
                twobuttons={false}
                
            />
           
        </div>
    )
}

export default Tesla
