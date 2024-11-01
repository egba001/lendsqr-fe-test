import Image from 'next/image'
import styles from '@/assets/styles/users.module.scss'

interface MetricsCardProps {
    icon: string
    data: string
    value: number
}

export default function MetricsCard({ icon, data, value }: MetricsCardProps) {
    return (
        <div className={styles.card}>
            <Image src={icon} alt={data} width={40} height={40} />
            <h4 className={styles.data_text}>{data}</h4>
            <p>{value}</p>
        </div>
    )
}
