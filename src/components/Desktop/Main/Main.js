import React, { useState, useEffect } from 'react';

import ParallaxDesktop from '../../Parallax/ParallaxDesktop';

const Main = () => {

    const [firstString, setString] = useState("Cześć! Nazywam się Michał Szczepański i – jak można się z łatwością zorientować – zajmuję się tworzeniem stron internetowych. Zresztą, nie tylko tym. Jestem programistą JavaScript, mogę więc stworzyć również aplikację internetową, typu Kalkulator Budżetu, oraz sklep internetowy dla praktycznie każdej działalności, którą można prowadzić w sieci.");
    const [secondString, setSecString] = useState("W swojej pracy skupiam się na technologii, wychodząc z założenia, że nasze strony są tak dobre, jak dobrze orientujemy się w narzędziach, z których możemy korzystać. Wszystkie moje projekty powstają w zgodzie z obecnymi trendami oraz zasadami bezpieczeństwa.")
    const [thirdString, setThirdString] = useState("Śmiało można o mnie powiedzieć, że jestem zapalonym programistą, jednocześnie jednak trudno określić mnie jako urodzonego sprzedawcę. Skoro zatem nie sprzedam swojej oferty, to pozostaje mi liczyć, że lubisz czytać tak bardzo, jak ja i zaprosić Cię niżej – do czytnika – gdzie będziesz mógł zapoznać się ze wszystkimi informacjami, zarówno dotyczącymi mnie, jak i moich umiejętności oraz dostępnej oferty.")

    const [firstArray, setFirstArray] = useState([]);
    const [secondArray, setSecondArray] = useState([]);
    const [thirdArray, setThirdArray] = useState([]);

    useEffect(() => {
        const array = firstString.split(" ");
        setFirstArray(array);
    }, []);

    useEffect(() => {
        const array = secondString.split(" ");
        setSecondArray(array);
    }, []);

    useEffect(() => {
        const array = thirdString.split(" ");
        setThirdArray(array);
    }, []);


    const aosFirstString = firstArray.map((string, index) => {
        let delay = "0"
        if (index === 0) delay = "0";
        else {
            delay = String(100 * index)
        }
        return (
            <p id={index + 1} className={`middleString`} data-aos-offset="200" data-aos-anchor=".intro" data-aos="fade-down" data-aos-delay={delay}  >{string}</p>
        )
    })

    const aosSecondString = secondArray.map((string, index) => {
        let delay = "0"
        if (index === 0) delay = "0";
        else {
            delay = String(100 * index)
        }
        return (
            <p id={index + 1} className="middleString" data-aos-offset="200" data-aos-anchor=".middle" data-aos="fade-down" data-aos-delay={delay}  >{string}</p>
        )
    })
    const aosThirdString = thirdArray.map((string, index) => {
        let delay = "0"
        if (index === 0) delay = "0";
        else {
            delay = String(100 * index)
        }
        return (
            <p id={index + 1} className="middleString" data-aos-offset="200" data-aos-anchor=".end" data-aos="fade-down" data-aos-delay={delay}  >{string}</p>
        )
    })

    return (
        <section className="main">
            <div className="intro">
                {aosFirstString}
            </div>
            <div className="middle">
                {aosSecondString}
            </div>
            <div className="end">
                {aosThirdString}
            </div>
            <ParallaxDesktop />
        </section>
    );
}

export default Main;