import { UsersInterface } from '@/interfaces/usersInterface'

export default async function UsersPage() {
    // function to fetch mock data from mocky endpoint
    const fetchUsersData = async (): Promise<UsersInterface> => {
        let data = await fetch(
            'https://run.mocky.io/v3/862731c1-7aa2-4d5e-a090-dcfb151ecfd9'
        )
        let posts = await data.json()
        return posts
    }

    const users = await fetchUsersData()

    // console.log(users)

    return (
        <div>
            <h3>Users</h3>
        </div>
    )
}
