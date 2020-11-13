import React, { useState, useEffect } from 'react';

import triquetra from '../../css/triquetra.png';
import enso from '../../css/enso.png';

const ParallaxDesktop = () => {

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
            <img src={triquetra} alt="" className="parallax"
                style={{ transform: `translateY(${offset * 0.5}px)` }} />
            <img src={enso} alt="" className="parallax"
                style={{ transform: `translateX(${offset * 1.1}px) rotate(${offset}deg)` }} />
        </>
    );
}

export default ParallaxDesktop;