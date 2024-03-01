import { ReactRef } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

gsap.registerPlugin(ScrollTrigger)

export default function useAnimateScroll(
    triggerId: string,
    endTriggerId: string,
    scrollPageElement: ReactRef,
    spinnerId?: string
) {
    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    scrub: 1,
                    pin: true,
                    trigger: triggerId,
                    start: '50% 50%',
                    endTrigger: endTriggerId,
                    end: 'bottom',
                },
            })

            spinnerId &&
                tl.to(spinnerId, {
                    rotateZ: 1000,
                })
        }, scrollPageElement) // Scope selector
        return () => ctx.revert() // cleanup
    }, [scrollPageElement.current])
}
