import React, { useState, useEffect } from 'react';

import KindleContent from './KindleContent';

const Footer = () => {

    const [isKindleVisible, showKindle] = useState(false);
    const [isOnVisible, setVisibility] = useState(false);

    useEffect(() => {
        function handleScroll() {
            let offset = (window.pageYOffset);
            const app = document.querySelector('.App');
            const maxScrollValue = app.offsetHeight - window.innerHeight;
            const eightyPercentScroll = maxScrollValue * 0.8;
            if (offset < eightyPercentScroll) setVisibility(false);
            else if (offset >= eightyPercentScroll) setVisibility(true)
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    })


    return (

        <div className="screen">
            <div className={isKindleVisible ? "kindleImage blur" : "kindleImage"}>
                <i onClick={() => showKindle(true)} className={isOnVisible ? "fas fa-power-off On" : "fas fa-power-off On hide"}
                ></i>
                <p className={isOnVisible ? "turnMeOn" : "turnMeOn hide"}>Użyj przycisku!</p>
            </div>


            {isKindleVisible ?
                <div className="kindleBig" >
                    <KindleContent />
                    <i onClick={() => showKindle(false)} className="fas fa-power-off Off"></i>
                </div> :
                <div className="kindleBig hide" onClick={() => showKindle(false)}>

                </div>}
        </div>
    );
}

export default Footer;