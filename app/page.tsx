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

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    scrub: 1,
                    pin: true,
                    trigger: '#pin-windmill',
                    start: '50% 50%',
                    endTrigger: '#pin-windmill-wrap',
                    end: 'bottom 50%',
                },
            })

            tl.to('#pin-windmill-svg', {
                rotateZ: 900,
            })
        }, scrollPage) // Scope selector
        return () => ctx.revert() // cleanup
    }, [scrollPage.current])

    return (
        <main ref={scrollPage} className="homepage-container" id="pin-windmill">
            {/* <h1>Pink Panther</h1> */}
            <NavComponent />
            <CardSectionList />
            <SpinnerIcon className="spinner-svg" id="pin-windmill-svg" />
            <div id="pin-windmill-wrap"></div>
        </main>
    )
}
