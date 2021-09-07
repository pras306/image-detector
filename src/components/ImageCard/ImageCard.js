import React from 'react';

import './ImageCard.css';

const ImageCard = (props) => {
    
    const { src, box } = props;

    const renderComponent = props.src ? 
    (
        <React.Fragment>
            <img id="inputImage" alt="Uploaded Pic" src={src} className="image-card__image" />
            <div className="image-card__bounding-box" style={{top: `${box.top_row}px`, left: `${box.left_col}px`, right: `${box.right_col}px`, bottom: `${box.bottom_row}px`}}></div>
        </React.Fragment>
        
    ) :
    (
        <p>No Image uploaded yet.</p>
    );

    return (
        <div className="image-card">
            {renderComponent}
        </div>
    )
};

export default ImageCard;
