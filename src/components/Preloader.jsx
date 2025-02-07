import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const Preloader = () => {

    const preloaderRef = useRef(null);
    const textRef = useRef(null);
    const [isVisible, setisVisible] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    setisVisible(false);
                    onComplete();
                }, 500);
            }
        });
    });

    tl.to(preloaderRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
    })
    .fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .to(preloaderRef.current, {
        delay: 1.5,
        duration: 1.2,
        opacity: 0,
        scale: 1.1,
        ease: "power2.inOut"
    }, [onComplete]);

    if (!visible) return null;

    return (
        <div ref={preloaderRef} className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
            <h1 ref={textRef} className="text-4xl font-bold tracking-widset text-blue-50 uppercase font-general">
                Kreeda Studios
            </h1>
        </div>
    );
}

export default Preloader;