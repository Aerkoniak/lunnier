import React, { useState, useEffect } from 'react';

import footprints from '../../../css/snow-long.png';
import TypedComponent from '../Typed/TypedComponent';


const Header = () => {

    const [yPosition, setYPosition] = useState("-1")

    useEffect(() => {

        function handleScroll() {
            setYPosition(window.pageYOffset)
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <section className="header desktop">
            <div className="topPart">
                <TypedComponent text="Chodzisz i szukasz pomysłu na swoją stronę?" id="top" />
            </div>
            <img style={{ transform: `translateX(-${yPosition * 0.75}px)` }} src={footprints} alt="ślady na śniegu" className="footprints" />
            <div className="bottomPart">
                <TypedComponent text="Zaszedłeś w dobre miejsce. Scrolluj w dół." id="bottom" delay={3000} />
            </div>
        </section>
    );
}

export default Header;