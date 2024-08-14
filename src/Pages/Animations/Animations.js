import React,{useRef} from 'react'
import { useInView } from 'framer-motion';
import '../../New css/Experience Design/EDNewInfo.css'

export function FadeIn({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='fadeinparent'>
            <span 
                style={{
                    // transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}
export function FadeLeft({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='fadeparent'>
            <span className='fadechild'
                style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function FadeRight({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className='fadeparent' ref={ref}>
            <span className='fadechild'
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function FadeUp({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className='fadeparent' ref={ref}>
            <span className='fadechild'
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function FadeDown({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className='fadeparent' ref={ref}>
            <span 
            className='fadechild'
                style={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function SlideUp({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='slideparent'>
            <span
                style={{
                    transform: isInView ? "none" : "translateY(400px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function SlideDown({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='slideparent'>
            <span
                style={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function SlideLeft({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='slideparent'>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}
export function SlideRight({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='slideparent'>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-1000px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function ScaleDown({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='scaleparent'>
            <span
                style={{
                    transform: isInView ? "none" : "translateY(-1000px)",
                    scale:isInView? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}

export function ScaleUp({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className='scaleparent'>
            <span
                style={{
                    transform: isInView ? "none" : "scale(0)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </section>
    );
}