import React from 'react';
const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={props.image} />
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;