interface StatusTagProps {
    status: string
}

export default function StatusTag({ status }: StatusTagProps) {
    // Define a style for the tag based on the status
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'active':
                return {
                    backgroundColor: 'rgba(57, 205, 98, 0.1)',
                    color: '#39CD62',
                }
            case 'inactive':
                return {
                    backgroundColor: 'rgba(84, 95, 125, 0.1)',
                    color: '#545F7D',
                }
            case 'pending':
                return {
                    backgroundColor: 'rgba(233, 178, 0, 0.1) ',
                    color: '#E9B200',
                }
            default:
                return {
                    backgroundColor: 'rgba(228, 3, 59, 0.1)',
                    color: '#E4033B',
                }
        }
    }

    const style = getStatusStyle(status)

    return (
        <span
            style={{
                padding: '0.5rem 1rem',
                textTransform: 'capitalize',
                fontWeight: '500',
                borderRadius: '19px',
                ...style,
            }}
        >
            {status}
        </span>
    )
}
