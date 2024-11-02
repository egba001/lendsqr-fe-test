import styles from '@/assets/styles/tab.module.scss'

interface TabProps {
    titles: string[]
    activeTab: number
    setter: (id: number) => void
}

export default function Tab({ titles, activeTab, setter }: TabProps) {
    return (
        <div className={styles.tab_container}>
            <ul className={styles.tab_list}>
                {titles.map((title, id) => (
                    <li
                        key={id}
                        className={`${activeTab === id ? styles.active : null}`}
                        onClick={() => setter(id)}
                    >
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
