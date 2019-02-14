import React, { Component } from 'react';
import Item from './item';


function FirstComponent(props){
    console.log("This is first comp props", props.items);
    return (
        <div>
        {props.items.map((item, index) => {
        //   return <p key={index}>{props.items[index]}</p>
            return <p key={index}>
                <Item item={props.items[index]} />
                </p>
        })}
        </div>
    )
};

export default FirstComponent;