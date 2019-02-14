import React, { Component } from 'react';

function Item({item}){
    return (
        <label>
            <input id="item" type="checkbox"/>{item}
        </label>
    )

};

export default Item;

