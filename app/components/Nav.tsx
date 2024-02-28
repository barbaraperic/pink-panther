import styles from './Nav.module.css'

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

    return (
        <nav className={styles.nav}>
            <div className={styles.line}></div>
            {links.map((link, i) => (
                <a className={styles.node} href={link.href} key={i}></a>
            ))}
        </nav>
    )
}
