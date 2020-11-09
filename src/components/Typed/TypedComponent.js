import React, { Component, useState, useEffect } from 'react';
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

        const typed = new Typed(`#${id}`, options);
    }, [])

    return (
        <span className={`typedText ${id}`} id={`${id}`}></span>
    );
}

export default TypedComponent;



