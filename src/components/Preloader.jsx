import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const Preloader = ({ onComplete }) => {

    const preloaderRef = useRef(null);
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    setIsVisible(false);
                    onComplete();
                }, 500);
            }
        });
        tl.to(preloaderRef.current, {
            duration: 1,
            opacity: 1,
            ease: "power2.inOut",
        })
        .fromTo(
            textRef.current,
            { y: 50, opacity: 0, scale: 0.8 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power2.inOut" }
        )
        .to(textRef.current, {
            delay: 1,
            scale: 1.1,
            opacity: 0,
            duration: 1.2,
            ease: "pwer2.inOut"
        })
        .to(preloaderRef.current, {
            duration: 1,
            opacity: 0,
            scaleY: 0,
            ease: "power3.inOut"
        });
    }, [onComplete]);


    if (!isVisible) return null;

    return (
        <div ref={preloaderRef} className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
            <h1 ref={textRef} className="special-font hero-heading tracking-widset text-blue-50 uppercase font-circular-web">
                Kreeda Studios
            </h1>
        </div>
    );
}

export default Preloader;