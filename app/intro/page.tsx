import IntroTitleComponent from '../components/IntroTitle'
import SwingComponent from '../components/Swing'
import PantherMorphComponent from '../icons/PantherMorph'
import BackgroundLayerIllustration from '../illustrations/BackgroundLayer'
import DetectiveIllustration from '../illustrations/Detective'
import styles from './introPage.module.scss'

export default function IntroPage() {
    return (
        // <div className={styles.wrapper}>
        //     <div className={`${styles.box} ${styles.a}`}></div>
        //     <div className={`${styles.box} ${styles.b}`}>B</div>
        //     <div className={`${styles.box} ${styles.c}`}>
        //         example{' '}
        //         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        //             <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
        //         </svg>
        //     </div>
        //     <div className={`${styles.box} ${styles.d}`}>
        //         <div className={`${styles.box} ${styles.e}`}>E</div>
        //         <div className={`${styles.box} ${styles.f}`}>F</div>
        //         <div className={`${styles.box} ${styles.g}`}>G</div>
        //     </div>
        // </div>
        <div className={styles.container}>
            <div className={styles.title}>
                <IntroTitleComponent />
            </div>
            <div className={styles['illustration-grey']}>
                <DetectiveIllustration />
            </div>
        </div>
    )
}
