import React from "react";

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.image} alt="" />
            <h2>{props.head}</h2>
            <p>{props.text}</p>
            <button>Learn more</button>
        </div>
    )
}

export default Card;