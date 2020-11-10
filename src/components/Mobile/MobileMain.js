import React, { useEffect } from 'react';

import ParallaxMobile from '../Parallax/ParallaxMobile';
import ContactForm from '../Contact/ContactForm';

const MobileMain = () => {



    return (
        <section className="mainMobile container-fluid">
            <div className="chapter row" id="chapterOne">
                <h4 className="col-12 title">Trochę o mnie.</h4>
                <p className="col-12 col-sm-6">Jestem trzydziestolatkiem, który w końcu zaczął zajmować się tym, co sprawia mu przyjemność. Liceum z profilem biologiczno-chemicznym, później niezwiązane z biologią ani chemią studia, trzy różne kierunki, każdy porzucony. Blisko dziesięć różnych zawodów w przeciągu pięciu lat i wszystko to po to by ostatecznie zdecydować się na emigrację, w poszukiwaniu jeszcze czegoś innego. Typowy millenials.</p>
                <p className="col-12 col-sm-6">
                    Wyjazd za granicę i życie za nią przez cztery lata nauczyło mnie pokory oraz solidnie przygotowało grunt pod późniejsze zmiany zarówno charakteru jak i poglądowe. [grafika triquetry] Celtycka triquetra w jednym ze swych znaczeń symbolizuje to, iż wszystko co robimy w życiu powraca do nas później trzykrotnie silniej. Dojrzałem do tego poglądu.
                </p>
                <p className="col-12">Obecnie od blisko półtora roku zajmuje się projektowaniem i programowaniem stron, i wszystkiego innego, co można znaleźć w internecie. Naukę i kursy rozpocząłem jeszcze w Niderlandach, na ten moment jednak wróciłem z powrotem do kraju, postanawiając iż zarówno on jak i ja zasługujemy na jeszcze jedną próbę.</p>
            </div>
            <div className="chapter row" id="chapterTwo">
                <h4 className="col-12 title">Trochę o moich umiejętnościach.</h4>
                <p className="col-12 col-sm-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci?</p>
                <p className="col-12 col-sm-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci? Umiejętności</p>
                <p className="col-12 col-sm-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci?</p>
                <p className="col-12 col-sm-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci?</p>
            </div>
            <div className="chapter row" id="chapterThree">
                <h4 className="col-12 title">Co mogę dla Ciebie stworzyć.</h4>
                <p className="col-12 col-sm-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci?</p>
                <p className="col-12 col-sm-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae, dolorem saepe rerum aperiam nulla explicabo nostrum repellendus perferendis minus aut sed accusamus dicta doloribus debitis a est omnis repellat?</p>
                <p className="col-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ratione quidem architecto suscipit neque tempora. Doloremque deserunt corporis, accusamus dicta doloribus tempora hic sapiente sequi, quod velit culpa reiciendis adipisci?</p>
            </div>

            <ParallaxMobile />
        </section>
    );
}

export default MobileMain;