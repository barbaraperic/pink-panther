import { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './Swing.module.css'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { gsap } from 'gsap/gsap-core'

gsap.registerPlugin(CSSPlugin, CustomEase)

export default function SwingComponent() {
    const container = useRef(null)

    const useIsomorphicLayoutEffect =
        typeof window !== 'undefined' ? useLayoutEffect : useEffect

    useIsomorphicLayoutEffect(() => {
        const swingRadius = gsap.getProperty(container.current, '--radius')
        const transformOriginValue = '50% -' + swingRadius + 'vh'

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({})

            tl.add('move')

            // tl.to(
            //     '#swing',
            //     {
            //         duration: 10,
            //         rotation: '-30deg',
            //         transformOrigin: transformOriginValue,
            //         ease: 'elastic.out( 3, 0.1)',
            //         repeat: -1,
            //         delay: 2,
            //     },
            //     'move'
            // )

            // // shows the radius of the arc
            // tl.to(
            //     '#circle',
            //     {
            //         duration: 10,
            //         rotation: '-30deg',
            //         transformOrigin: '50% 0px',
            //         ease: 'elastic.out( 3, 0.1)',
            //         delay: 2,
            //         repeat: -1,
            //     },
            //     'move'
            // )

            tl.to(
                '#swing',
                {
                    duration: 5, // Adjust duration as needed
                    rotation: '30deg', // Rotate to 30 degrees
                    transformOrigin: transformOriginValue,
                    ease: 'elastic.out(3, 0.1)',
                },
                'move'
            )

            // Revert to 0 degrees
            tl.to(
                '#swing',
                {
                    duration: 5, // Adjust duration as needed
                    rotation: '0deg', // Rotate back to 0 degrees
                    transformOrigin: transformOriginValue,
                    ease: 'elastic.out(3, 0.1)',
                },
                'move'
            )

            // shows the radius of the arc
            tl.to(
                '#circle',
                {
                    duration: 5, // Adjust duration as needed
                    rotation: '30deg', // Rotate to 30 degrees
                    transformOrigin: '50% 0px',
                    ease: 'elastic.out(3, 0.1)',
                },
                'move'
            )

            // Revert to 0 degrees
            tl.to(
                '#circle',
                {
                    duration: 5, // Adjust duration as needed
                    rotation: '0deg', // Rotate back to 0 degrees
                    transformOrigin: '50% 0px',
                    ease: 'elastic.out(3, 0.1)',
                },
                'move'
            )

            return () => ctx.revert()
        })
    }, [])

    return (
        <section ref={container} id={styles.container}>
            <div className={styles.swing} id="swing"></div>
            <span className={styles.circle} id="circle"></span>
        </section>
    )
}
