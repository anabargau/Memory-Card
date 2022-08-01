import React, { useEffect } from 'react';
import Picture from './Picture';

function Grid(props) {
    const { images, clickImage, randomizeArray } = props;

    useEffect(() => {
        randomizeArray();
    }); 

    return (
        <div className='image-grid'>
            {images.map((image, idx) => (
                <Picture key={idx} image={image} clickImage={clickImage} />
            ))}
        </div>
    )
};

export default Grid;