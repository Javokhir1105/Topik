import React from 'react'
import Marquee from 'react-fast-marquee'
import rasm from '../../assets/Certifikate.png'

function About() {
    return (
        <div className='About'>
            <div className="container">
                <div className="about-container">
                    <Marquee>
                        <ul className="item flex gap-4">
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                        </ul>
                    </Marquee>
                    <Marquee direction='right'>
                        <ul  className="item2 flex gap-4">
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                            <img src={rasm} alt="" className="about-img" />
                        </ul>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default About
