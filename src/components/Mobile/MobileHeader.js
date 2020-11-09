import React, { useState, useEffect } from 'react';
import '../../css/mobile_css.css'

// import brokenScreen from '../../css/crack.png';
import TypedComponent from '../Typed/TypedComponent';

const MobileHeader = () => {

    const [isScreenBroken, brokeScreen] = useState(false)

    return (
        <section className={isScreenBroken ? "header mobile broken" : "header mobile"}
            onClick={() => brokeScreen(!isScreenBroken)}    >

            {isScreenBroken ? <TypedComponent id="mobileBreak" text="Ojej, stłukło się..." delay={250} /> : <p>tapnij w ekran</p>}

            <div className={isScreenBroken ? "secondHeader shown" : "secondHeader hide"}>
                {isScreenBroken ? <TypedComponent id="secondStart" delay={3500} text="Zacznijmy więc od początku." /> : null}
            </div>
        </section>
    );
}

export default MobileHeader;