import styles from './BackgroundLayout.module.css'

export default function BackgroundLayoutComponent() {
    return (
        <div className={styles.container}>
            <div className={`${styles.box} w-[200px] h-[200px]`}></div>
            <div className={`${styles.box} w-[200px] h-[200px]`}></div>
            <div className={`${styles.box} w-[200px] h-[200px]`}></div>
        </div>
    )
}
