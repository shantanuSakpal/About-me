import React, { useEffect } from 'react'



export const HomeFancyText = () => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const enhance = (id) => {
        const element = document.getElementById(id),
            text = element.innerText.split("");

        element.innerText = "";

        text.forEach((value, index) => {
            const outer = document.createElement("span");

            outer.className = "outer";

            const inner = document.createElement("span");

            inner.className = "inner";

            inner.style.animationDelay = `${rand(-5000, 0)}ms`;

            const letter = document.createElement("span");

            letter.className = "letter";

            letter.innerText = value;

            letter.style.animationDelay = `${index * 1000}ms`;

            inner.appendChild(letter);

            outer.appendChild(inner);

            element.appendChild(outer);
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            enhance("wow1");
            enhance("wow2");
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    return (



        <div id="text " className='mt-5 '>
            <div id="text">
                <div class="line">
                    <p class="word fancy">I</p>
                    <p class="word fancy">Am</p>
                    <p class="word fancy">a</p>
                </div>

                <div class="line">
                    <p id='wow1' class="word fancy">developer</p>
                </div>

                <div class="line">
                    <p class="word fancy">with</p>
                    <p class="word fancy">some</p>

                </div>

                <div class="line">
                    <p id="wow2" class="word fancy ">
                        Creativity
                    </p>
                </div>
            </div>

        </div>


    )
}
