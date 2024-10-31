import Image from 'next/image'

interface MetricsCardProps {
    metricsData: {
        icon: string
        metric: string
        value: number
    }
}

export default function MetricsCard({ metricsData }: MetricsCardProps) {
    return (
        <div>
            <Image
                src={metricsData.icon}
                alt={metricsData.metric}
                width={30}
                height={30}
            />
            <h4>{metricsData.metric}</h4>
            <p>{metricsData.value}</p>
        </div>
    )
}
