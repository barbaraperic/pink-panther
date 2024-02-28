import styles from './CardSection.module.css'

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
    return (
        <section id={id} className={styles.section}>
            <div className={styles.number}>{number}</div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.card}>{text}</div>
        </section>
    )
}