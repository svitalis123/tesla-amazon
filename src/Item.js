import React from 'react'
import './Item.css'
import Button from './Button'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
function Item({img, title, des, rightitemtext, rightitemlink, leftitemtext, leftitemlink, twobuttons, arrodown}) {
    return (
        <div className="item" style={{backgroundImage:`url(${img})`}} >
            <div className="item__container" >
                <div className="item__upper" >
                    <h2>{title}</h2>
                    <div className="item_des">
                        <p>{des}</p>
                    </div>
                </div>
                <div className="twobuttons">
                        <Button inp="primary" link={leftitemlink} text={leftitemtext} />
                        {
                            twobuttons && <Button
                            inp="secondary" 
                            link={rightitemlink}
                            text={rightitemtext}
                            />
                        }
                </div>
                <div className="item__drop">
                            {
                                arrodown && <KeyboardArrowDownIcon  />
                            }
                </div>
            </div>
        </div>
    )
}

export default Item
