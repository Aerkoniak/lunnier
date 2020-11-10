import React, { useState, useEffect } from 'react';

import triquetra from '../../css/triquetra_small.png';
import trio from '../../css/uti-trio.png';
import phone from '../../css/phone.png';
import mail from '../../css/mail.png';


const ParallaxMobile = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {

        function handleScroll() {
            setOffset(window.pageYOffset)
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <>
            <div className="parallaxWrap">
                <img src={triquetra} alt="" className="parallaxMob triq"
                    style={{ transform: `translateY(${offset * 0.5}px)` }} />
                <img src={trio} alt="" className="parallaxMob utilities"
                    style={{ transform: `translateX(${offset * 0.1}px)` }} />
                <img src={phone} alt="" className="parallaxMob phone"
                    style={{ transform: `translateY(${offset * 0.3}px) translateX(${offset * 0.1}px)` }} />
                <img src={mail} alt="" className="parallaxMob mail"
                    style={{ transform: `translateY(-${offset * 0.2}px) translateX(-${offset * 0.1}px)` }} />
            </div>
        </>
    );
}

export default ParallaxMobile;