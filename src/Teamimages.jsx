import React from "react";


const Teamimages = (props) => {
    return(
        <div className="teamimages">
            <div className="imageCard">
                <img src={props.img} alt="" />
                <div className="arrows"><div className="leftArr"></div><div className="rightArr"></div></div>
                <div className="team-member-name">
                    <div className="purple"></div>
                    <h2>{props.teamName}</h2>
                    <p>{props.occupation}</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Teamimages;