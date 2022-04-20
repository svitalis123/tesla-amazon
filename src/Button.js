import React from 'react'
import './Button.css'
function Button({inp, text, link}) {
    return (
        <div className={`button ${inp === 'secondary' ? 'whitebutton' : ''}`} >
            
                <a href={link}>
                    {text}
                </a>
        </div>
    )
}

export default Button
