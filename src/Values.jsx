import React from "react";
import imageOne from './images/Group 23.png'
import imagetwo from './images/Group 22.png'
import imagethree from './images/Group 24.png'
import imagefour from './images/Group 19.png'
import imagefive from  './images/Group 13.png'
import imagesix from './images/Frame 2 (1).png'

const Values = () => {
    return(
        <div className="values">
            <div className='value contentMargin'>
                <h1>6 things we value</h1>
                <div className="valueImages">
                <img src={imageOne} alt="" />
                <img src={imagetwo} alt="" />
                <img src={imagethree} alt="" />
                <img src={imagefour} alt="" />
                <img src={imagefive} alt="" />
                <img src={imagesix} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Values;