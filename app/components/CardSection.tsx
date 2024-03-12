'use client'

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import styles from './CardSection.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function CardSection({
    id,
    title,
    number,
    text,
}: {
    id: string
    title: string
    number: string
    text: string
}) {
    const box = useRef(null)
    useIsomorphicLayoutEffect(() => {
        console.log(box)
        if (box) {
            gsap.to(box.current, {
                scale: 1.5,
                duration: 1,
                scrollTrigger: {
                    scrub: 1,
                    trigger: box.current,
                    start: 'bottom bottom',
                    end: 'top top',
                },
            })
        }
        // Cleanup
        return () => {
            if (box) {
                gsap.to(box, { scale: 1 })
            }
        }
    }, [box.current])

    return (
        <section id={id} className={styles.section}>
            <div className={styles.number} ref={box} id="number">
                {number}
            </div>
            <h2 className={styles.title}>{title}</h2>
            <div
                className={`${styles.card} ${styles['paragraph-a']}`}
                id="card"
            >
                {text}
            </div>
            <div className={`${styles.card} ${styles['paragraph-b']}`}>
                {text}
            </div>
        </section>
    )
}
