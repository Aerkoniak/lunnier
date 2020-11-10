import React, { useState, useEffect } from 'react';
import '../../css/mobile_css.css'

// import brokenScreen from '../../css/crack.png';
import TypedComponent from '../Typed/TypedComponent';

const MobileHeader = () => {

    const [isScreenBroken, brokeScreen] = useState(false)

    return (
        <>
            <section className={isScreenBroken ? "header mobile broken" : "header mobile"}
                onClick={() => brokeScreen(true)}    >

                {isScreenBroken ? <TypedComponent id="mobileBreak" text="Ojej, stłukło się..." delay={250} /> : <p>tapnij w ekran</p>}
                <div className={isScreenBroken ? "secondHeader shown" : "secondHeader hide"}>
                    {isScreenBroken ? <TypedComponent id="secondStart" delay={3000} text="Zbudujmy to więc od początku..." /> : null}
                    {isScreenBroken ? <TypedComponent id="secondStartString" delay={5500} text="Nazywam się Michał Szczepański i zawodowo zajmuje się projektowaniem oraz programowaniem stron i aplikacji mobilnych." /> : null}
                    {isScreenBroken ? <TypedComponent id="thirdStartString" delay={14000} text="Zjedź niżej jeśli chcesz się dowiedzieć więcej." /> : null}
                </div>
            </section>

        </>
    );
}

export default MobileHeader;