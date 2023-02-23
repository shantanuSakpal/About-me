import gsap from 'gsap';
import React, { useEffect } from 'react'

export const CursorFancy = () => {
    function cursorfancy() {

        const $bigBall = document.querySelector('.cursor__ball--big');
        const $smallBall = document.querySelector('.cursor__ball--small');
        const $hoverables = document.querySelectorAll('.hoverable');

        // Listeners
        document.body.addEventListener('mousemove', onMouseMove);
        for (let i = 0; i < $hoverables.length; i++) {
            $hoverables[i].addEventListener('mouseenter', onMouseHover);
            $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
        }

        // Move the cursor
        function onMouseMove(e) {
            gsap.to($bigBall, .4, {
                x: e.pageX - 15,
                y: e.pageY - 15
            })
            gsap.to($smallBall, .1, {
                x: e.pageX - 5,
                y: e.pageY - 7
            })
        }

        // Hover an element
        function onMouseHover() {
            gsap.to($bigBall, .3, {
                scale: 4
            })
        }
        function onMouseHoverOut() {
            gsap.to($bigBall, .3, {
                scale: 1
            })
        }
        console.log("triggerd")
    }
    useEffect(() => {
        const timer = setTimeout(() => {

            cursorfancy();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            <div class="cursor">
                <div class="cursor__ball cursor__ball--big ">
                    <svg height="30" width="30">
                        <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                    </svg>
                </div>

                <div class="cursor__ball cursor__ball--small">
                    <svg height="10" width="10">
                        <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                    </svg>
                </div>
            </div>

        </>
    )


}
