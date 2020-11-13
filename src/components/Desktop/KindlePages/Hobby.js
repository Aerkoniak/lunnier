import React from 'react';
import { Link } from 'react-router-dom'

const Hobby = () => {
    return (
        <div className="contentPage">
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
            <p className="pageNumber">4</p>
            <h3>Czym się interesuje</h3>
            <p className="par">Robert Byrne, amerykański szachista i dziennikarz, powiedział kiedyś, że: <em>„Miarą człowieka jest bardziej jego hobby niż jego zawód”</em>, z czym – moim zdaniem – nie sposób się kłócić. Hobby poszerza horyzonty, a te, im są szersze, tym głębsze morze inspiracji rozciągają u naszych stóp.</p>
            <p className="par">Niemal połowę swojego życia jestem zaangażowany w internetowe Tekstowe Gry Fabularne. Ta forma spędzania wolnego czasu bazuje na, znanych od prawie pół wieku, role-playing games (inaczej RPG), których istotą jest wcielenie się w wykreowaną przez siebie postać. Rozrywka, dla wielu wciąż brzmiąca nieracjonalne, dała mi ponad dekadę doświadczenia w kreatywnym rozwiązywaniu problemów, a także poznawaniu charakterów oraz punktów widzenia niejednokrotnie odmiennych niż moje własne. Setki godzin główkowania nad tym, jaka strategia będzie skuteczniejsza, jak lepiej podejść do problemu, by osiągnąć wyznaczony sobie cel, to lekcje, które – jak subiektywnie uważam – były najważniejszymi w moim życiu.</p>
            <p className="par">Internetowa forma gier fabularnych różni się od swojego pierwowzoru w zasadzie tylko jedną cechą: całą istotą zabawy jest nie tylko wcielenie się w wymyśloną postać, ale także opisanie jej działań, przeżyć i doświadczeń w formie literackiej. Gdyby zebrać wszystkie posty, jakie podczas tych lat zdążyłem napisać i złożyć je w całość, to powstałaby z nich nie jedna, a kilka powieści. Głównie fantasy.</p>
            <p className="par">Fantastyka zasługuje zresztą na szczególną wzmiankę. Jestem ogromnym wielbicielem tego gatunku literackiego, a dzieła takich autorów, jak: J.R.R. Tolkien, Frank Herbert, czy Glen Cook towarzyszą mi niemal od podstawówki. Niejednokrotnie, znajdując w sobie cechy introwertyka, wolałem spędzić wieczór (a często i noc) nad książką niż oddawać się jakiejkolwiek innej aktywności. Sentyment do fantastyki pozostał, chociaż moja pasja czytania już dawno przestała ograniczać się do tego jednego gatunku. Niestety, z żalem zorientowałem się, że w dorosłym życiu nie ma już tyle czasu na czytanie, wciąż jednak uważam, że jest to jedno z najbardziej rozwojowych zainteresować (zaraz obok wspomnianym przeze mnie RPG), jakie istnieją w dzisiejszym świecie.</p>
            <p className="par">Ukoronowaniem zarówno moich zainteresowań, jak i tego rozdziału niech będzie wspomnienie, że od roku pracuję nad połączeniem swoich pasji w jeden projekt. Mianowicie, tworzę własną Tekstową Grę Fabularną, której akcja toczyć się będzie w autorskim świecie fantasy, a jej mechanika opierać się będzie na autorskiej aplikacji JavaScript.</p>
            <p className="return"><Link to="/">wróć do spisu treści</Link></p>
        </div>
    );
}

export default Hobby;