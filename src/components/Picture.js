import React from 'react';

function Picture(props) {
    const { image, clickImage } = props;
    return (
        <img src={image.src} id={image.id} alt={image.id} onClick={clickImage}></img>
    )
};

export default Picture;