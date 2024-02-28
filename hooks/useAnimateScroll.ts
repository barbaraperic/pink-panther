import { ReactRef } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function useAnimateScroll(
    triggerId: string,
    endTriggerId: string,
    scrollPageElement: ReactRef,
    spinnerId?: string
) {
    // Solves both SSR and CSR switching context issues
    const useIsomorphicLayoutEffect =
        typeof window !== 'undefined' ? useLayoutEffect : useEffect

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    scrub: 1,
                    pin: true,
                    trigger: triggerId,
                    start: '50% 50%',
                    endTrigger: endTriggerId,
                    end: 'bottom 50%',
                },
            })

            spinnerId &&
                tl.to(spinnerId, {
                    rotateZ: 900,
                })
        }, scrollPageElement) // Scope selector
        return () => ctx.revert() // cleanup
    }, [scrollPageElement.current])
}
