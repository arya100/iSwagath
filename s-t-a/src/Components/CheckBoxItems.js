import React from 'react';

const Checkbox = ( props) => {
    
    return (
        <div>
            <p>check It name = {props.name} ,age = {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Checkbox;