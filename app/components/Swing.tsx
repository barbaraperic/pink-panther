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

            tl.to(
                '#swing',
                {
                    duration: 5,
                    rotation: '40deg',
                    transformOrigin: transformOriginValue,
                    ease: 'elastic.out(3, 0.1)',
                },
                'move'
            )

            tl.to(
                '#swing',
                {
                    duration: 5,
                    rotation: '0deg',
                    transformOrigin: transformOriginValue,
                    ease: 'elastic.out(3, 0.1)',
                },
                'move'
            )

            tl.to(
                '#circle',
                {
                    duration: 5,
                    rotation: '40deg',
                    transformOrigin: '50% 0px',
                    ease: 'elastic.out(3, 0.1)',
                },
                'move'
            )

            tl.to(
                '#circle',
                {
                    duration: 5,
                    rotation: '0deg',
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
