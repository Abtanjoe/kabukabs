import React from "react";

const FirstPage = (props) => {
    return(
        <div className='firstscreen'>
            <div className='screenContent contentMargin'>
                <h1><span>W</span>{props.text}</h1>
                <div className="btns"> <button className='mainBtn'>{props.signBtn}</button><button>{props.loginBtn}</button></div>
            </div>
        </div>
    );
}
export default FirstPage;