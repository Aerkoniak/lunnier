import React, { useState, useEffect } from 'react';

import ParallaxImg from '../Parallax/ParallaxImg';

const Main = () => {

    const [firstString, setString] = useState("Cześć. Nazywam się Michał Szczepański i jak można się zorientować zajmuję się tworzeniem stron internetowych. Nie tylko stron zresztą. Jestem programistą Javascript, więc mogę stworzyć zarówno prostą stronę, aplikację internetową typu Kalkulator Budżetu czy sklep internetowy dla w zasadzie każdego biznesu, który prowadzisz. ");
    const [secondString, setSecString] = useState("W pracy skupiam się na technologii, nasze strony są tak dobre jak dobrze orientujemy się w narzędziach, z których możemy korzystać. Moje projekty powstają w zgodzie z obecnymi trendami i zasadami bezpieczeństwa.")
    const [thirdString, setThirdString] = useState("Można o mnie powiedzieć, że jestem zawziętym programistą. Nie można jednak o mnie powiedzieć, bym lubił cokolwiek sprzedawać. Nie sprzedam więc swojej oferty, ale ponieważ lubię czytać zaproszę Cię niżej do czytnika gdzie będziesz mógł doczytać wszystkie interesujące być może Cię tematy dotyczące mnie, oferty czy też moich umiejętności.")

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
            <ParallaxImg />
        </section>
    );
}

export default Main;