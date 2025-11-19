import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {

    const cardComponent = robots.map((r, i) => {
        return <Card id={r.id}
            image={"https://robohash.org/" + r.id}
            key={r.id}
            name={r.name}
            email={r.email} />
    })

    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default Cardlist;
