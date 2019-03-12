import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.pic} alt="randomly-generated from unsplash"/>
                <h1>Pic of the Day!</h1>
            </div>
        );
    }
}
export default Card;