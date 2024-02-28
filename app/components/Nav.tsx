'use client'
import styles from './Nav.module.css'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

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

    function handleClick(e: any) {
        e.preventDefault()
        const href = e.target.getAttribute('href')
        const targetElement = document.querySelector(href)

        if (targetElement) {
            const topY =
                targetElement.getBoundingClientRect().top + window.scrollY
            gsap.to(window, {
                scrollTo: {
                    y: topY,
                    autoKill: false,
                },
                duration: 1.3,
                ease: Power3.easeOut,
            })
        }
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
