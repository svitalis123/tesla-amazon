import React from 'react'
import {Link} from 'react-router-dom'
import './More.css'
function More() {
    return (
        <div className="more" >
            <Link to="/tesla">
                <a href="">
                    Tesla
                </a>
            </Link>
        </div>
    )
}

export default More
