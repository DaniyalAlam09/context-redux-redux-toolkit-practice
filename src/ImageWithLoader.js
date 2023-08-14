import React, { useState } from 'react';

const ImageWithLoader = ({ src, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {!imageLoaded && (
                <div
                    // style={{
                    //     position: 'absolute',
                    //     top: 0,
                    //     left: 0,
                    //     width: '100%',
                    //     height: '500px',
                    //     display: 'flex',
                    //     justifyContent: 'center',
                    //     alignItems: 'center',
                    //     background: 'blue', // Loader background color
                    // }}
                >
                    {/* Replace the following with your preferred loader component */}
                    <img
                        src="/placeholders/hello.jpg"
                        alt='/helllp'
                    />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                style={{ display: imageLoaded ? 'block' : 'none', width: '100%', height: '100%' }}
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default ImageWithLoader;
