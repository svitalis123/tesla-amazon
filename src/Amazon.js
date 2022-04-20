import React from 'react'
import Img from './Img'
import './Amazon.css'
import Product from './Product'
function Amazon() {
    return (
        <div className="amazon" >
            <Img/>
            <div className="row__container" >
            <div className="row" >
                <Product
                 id={104010}
                title="samsung galaxy s20 fe 5g"
                description="factory unlocked android cell phone "
                img="https://m.media-amazon.com/images/I/71z2dc+XnrL._AC_UY218_.jpg"
                price={599.99}
                rating={4}

                />
            </div>
            <div className="row" >
                <Product
                 id={104011}
                title="ugg women fluff"
                description="ugg women fluff yeah slide slipper"
                img="https://m.media-amazon.com/images/I/71qVjleYKdL._AC_UL320_.jpg"
                price={99.95}
                rating={4}/>
                 <Product
                 id={104012}
                title="ugg women classic"
                description="ugg women classic fashion boot"
                img="https://m.media-amazon.com/images/I/81iTgAaflDL._AC_UL320_.jpg"
                price={169.95}
                rating={4}/>
                 <Product
                  id={104013}
                title="addidas women`s cloudfoam"
                description=" pure running shoe" 
                img="https://m.media-amazon.com/images/I/81zc8i+8qfL._AC_UL320_.jpg"
                price={54.50}
                rating={4}/>
            </div>
            <div className="row" >
                <Product
                 id={104014}
                title="sancua rectangle tablecloth"
                img="https://m.media-amazon.com/images/I/810iH01oH-L._AC_UL320_.jpg"
                description="sancua rectangle tablecloth- 
                60*84 inch-stain and wrinkle resistant"
                price={9.99}
                rating={5}/>
                 <Product
                  id={104015}
                title="obstal rectangle table cloth"
                description="obstal rectangle table cloth oil-proof spill-proof "
                img="https://m.media-amazon.com/images/I/813tP5sezCL._AC_UL320_.jpg"
                price={15.99}
                rating={4}/>
                
            </div>
            </div>
        </div>
    )
}

export default Amazon
