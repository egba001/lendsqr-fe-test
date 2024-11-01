interface Options {
    year: 'numeric' | '2-digit'
    month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | 'numeric'
    day: 'numeric' | '2-digit'
    hour: 'numeric' | '2-digit'
    minute: 'numeric' | '2-digit'
    hour12: boolean
}

export function formatDate(dateString: string): string | null {
    const date = new Date(dateString)

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return null // Return null if the date is invalid
    }

    const options: Options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }

    return new Intl.DateTimeFormat('en-US', options)
        .format(date)
        .replace(',', '')
}

// Usage
const dateString = '2023-08-23T17:15:00Z'
const formattedDate = formatDate(dateString)
console.log(formattedDate) // e.g., "8/23/2023, 5:15 PM"
