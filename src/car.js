import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './car.css'
import acces from './assets/Desktop-Accessories.jpg'
import model3 from './assets/Desktop-Model3.jpeg'
import models from './assets/Desktop-ModelS.jpeg'
import modelx from './assets/Desktop-ModelX.jpeg'
import modely from './assets/Desktop-ModelY.jpeg'
import solarpanel from './assets/Desktop-SolarPanels.jpeg'
import solarroof from './assets/Desktop-SolarRoof.jpeg'
import {Link, useHistory} from 'react-router-dom'

const slides=[
    {id: 0, url: `${acces}`},
    {id: 1, url: `${model3}`},
    {id: 2, url: `${models}`},
    {id: 3, url: `${modelx}`},
    {id: 4, url: `${modely}`},
    {id: 5, url: `${solarroof}`},
    {id: 6, url: `${solarpanel}`},

]

export  const Slide=()=>{
    const [index, set] = useState(0)
    
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: {   opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 7), 5000), [])
  return transitions.map(({ item, props, key }) => (
   <Link to="/tesla">
    <animated.div
    
      key={key}
      className="bg"
      style={{ ...props, height:'100%', width:'100%',backgroundRepeat:'no-repeat', backgroundImage: `url(${item.url})` }}
    />
    </Link>
  ))
}



