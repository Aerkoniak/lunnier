import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedComponent = ({ text, id, delay }) => {

    useEffect(() => {

        const options = {
            strings: [text],
            typeSpeed: 50,
            loop: false,
            showCursor: false,
        };
        if (delay) {
            options.startDelay = delay;
        }

        new Typed(`#${id}`, options);
    }, [text, delay, id])

    return (
        <span className={`typedText ${id}`} id={`${id}`}></span>
    );
}

export default TypedComponent;



