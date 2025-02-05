import React from 'react';

const userInput = (props) => {
    const style = {
        border : '2px solid red ',
        height: '20px',
        padding: '20px',
 
    }
    
    return <input 
    type = 'text' 
    style = { style }
    onChange = {props.onClick } 
    value = {props.currentname}/>

}

export default userInput;