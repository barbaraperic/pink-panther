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
        if (box) {
            gsap.to(box.current, {
                scale: 1.5,
                duration: 1,
                scrollTrigger: {
                    scrub: 1,
                    trigger: box.current,
                    start: 'center center',
                    end: 'bottom top',
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
            <div className={styles.card} id="card">
                <h2 className={styles.title}>{title}</h2>
                {text}
            </div>
            <div className={styles.card}>{text}</div>
        </section>
    )
}
