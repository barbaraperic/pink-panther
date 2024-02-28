'use client'
import SpinnerIcon from '../icons/Spinner'
import styles from './Nav.module.css'
import { useGSAP } from '@gsap/react'

export default function NavComponent() {
    const links = [
        {
            href: '#section1',
        },
        {
            href: '#section2',
        },
        {
            href: '#section3',
        },
        {
            href: '#section4',
        },
    ]

    // const { contextSafe } = useGSAP({ scope: container })

    // useGSAP(
    //     () => {
    //         tl.current = gsap
    //             .timeline({ repeat: -1, yoyo: true }) // Repeat indefinitely and yoyo back and forth
    //             .to('.candles', {
    //                 stagger: 1.2,
    //                 scaleY: gsap.utils.random(0.9, 1.1), // Random scale on the Y-axis
    //                 duration: gsap.utils.random(0.1, 0.5), // Random duration for the flicker
    //                 onStart: function () {
    //                     gsap.set('.candles', {
    //                         fill: '#FFA500',
    //                         opacity: Math.random() + 0.5,
    //                         transitionProperty: 'all',
    //                         transitionTimingFunction:
    //                             'cubic-bezier(0.4, 0, 0.2, 1)',
    //                         transitionDuration: '150ms',
    //                     })
    //                 },
    //                 ease: 'none', // Linear easing for a more natural flicker
    //             })
    //     },
    //     { scope: container }
    // )

    // gsap.timeline({
    //     scrollTrigger: {
    //         scrub: 1,
    //         trigger: '.scroll-trigger-ready__worm-wrap',
    //         start: 'top 90%',
    //         end: 'bottom 30%',
    //     },
    // })

    function handleClick(e: any) {
        const href = e.target.href
        const topY = e.target.getBoundingClientRect().y
        console.log(topY)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.line}></div>
            {links.map((link, i) => (
                <a
                    className={styles.node}
                    onClick={(e) => handleClick(e)}
                    href={link.href}
                    key={i}
                ></a>
            ))}
        </nav>
    )
}
