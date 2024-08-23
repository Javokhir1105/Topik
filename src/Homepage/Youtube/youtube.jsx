import React from 'react';

const YouTubeEmbed = () => {
    return (
        <div>
            <div className="container">
                <iframe
                className='Youtuber text-center mx-4'
                    width="1260"
                    height="615"
                    src="https://www.youtube.com/embed/Jnno-Oxmnj8?si=ehiUfJ4Yyfgi9_fT"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubeEmbed;
