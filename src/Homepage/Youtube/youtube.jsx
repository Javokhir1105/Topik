import React from 'react';

const YouTubeEmbed = () => {
    return (
        <div>
            <div className="container h-[550px] max-md:h-[300px] max-sm:h-[260px]">
                <iframe
                className='Youtuber text-center mx-4 w-11/12 h-full'
                   
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
