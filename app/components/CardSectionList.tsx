import CardSection from './CardSection'
import styles from './CardSectionList.module.css'

export default function CardSectionList() {
    const sectionList = [
        {
            id: 'section1',
            title: 'Test1',
            number: '01',
            text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. ',
        },
        {
            id: 'section2',
            title: 'Test 2',
            number: '02',
            text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. ',
        },
        {
            id: 'section3',
            title: 'Test3',
            number: '03',
            text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. ',
        },
    ]

    return (
        <div className={styles['section-wrapper']}>
            {sectionList.map((section) => (
                <CardSection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    number={section.number}
                    text={section.text}
                />
            ))}
        </div>
    )
}
