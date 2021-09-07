import React from 'react';

import './ListItems.css';

const ListItems = (props) => {
    const renderItems = props.items.map((item,idx) => {
        return <span key={idx}><strong>{item.name}</strong>{` - ${(item.value * 100).toFixed(2)}% match`}</span>
    });

    return (
        <div className="list-items">
            <h4>List of Closest Celebrity Matches</h4>
            <div className="list-items__grid">
                {renderItems}
            </div>
        </div>
    )
};

export default ListItems;
