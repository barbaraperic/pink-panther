'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import CardSectionList from './components/CardSectionList'
import NavComponent from './components/Nav'
import SpinnerIcon from './icons/Spinner'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const scrollPage = useRef(null)

    // Solves both SSR and CSR switching context issues
    const useIsomorphicLayoutEffect =
        typeof window !== 'undefined' ? useLayoutEffect : useEffect

    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             scrub: 1,
    //             pin: true,
    //             trigger: scrollPage.current,
    //             start: '50% 50%',
    //             endTrigger: '#pin-windmill-wrap',
    //             end: 'bottom 50%',
    //         },
    //     })

    // }, [])

    useIsomorphicLayoutEffect(() => {
        //rendering context
        let ctx = gsap.context(() => {
            ScrollTrigger.defaults({
                markers: true,
            })
            const tl = gsap.timeline({
                scrollTrigger: 'scrollPage.current',
            })

            tl.to('#pin-windmill-svg', {
                rotateZ: 400,
            })

            //1. SCROLLTRIGGER
            // timeline.to('.spin_text', {
            //     duration: 2,
            //     rotation: 360,
            // })

            // const gsap_red = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: '.gsap_red',
            //         toggleActions: 'restart pause reverse pause',
            //     },
            // })

            // gsap_red
            //     .to('.gsap_red', {
            //         duration: 1,
            //         backgroundColor: '#FFA500',
            //         ease: 'none',
            //     })
            //     .to('.gsap_red p', {
            //         scale: 2,
            //         repeat: -1,
            //         yoyo: true,
            //         ease: 'power2',
            //     })

            // const yoyo = gsap.timeline({
            //     scrollTrigger: '.yoyo',
            // })

            // yoyo.to('.yoyo p', {
            //     scale: 2,
            //     repeat: -1,
            //     yoyo: true,
            //     ease: 'power2',
            // })
        }, scrollPage) // Scope selector
        return () => ctx.revert() // cleanup
    }, [])

    return (
        <main ref={scrollPage} className="homepage-container" id="pin-windmill">
            <h1>Pink Panther</h1>
            <NavComponent />
            <CardSectionList />
            <SpinnerIcon className="spinner-svg" id="pin-windmill-svg" />
            <div id="pin-windmill-wrap"></div>
        </main>
    )
}
