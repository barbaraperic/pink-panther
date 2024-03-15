'use client'

import styles from './LinkPrimary.module.scss'

export default function LinkPrimary({ href }: { href: string }) {
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
        <div className={styles.linkwrapper}>
            <a
                href={href}
                className={styles.link}
                onClick={(e) => handleClick(e)}
            >
                <span className={styles.glow}></span>
                <span className="content">See more</span>
            </a>
        </div>
    )
}
