import type { User } from "../types/User";
import withUsers from "../withUsers";

const url = 'https://jsonplaceholder.typicode.com/users';

type UsersTableProps = {
    users: User[];
}

function UsersTable(props: UsersTableProps) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen space-y-4">
            <h2>Users Table View</h2>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-x-gray-400 p-4 text-white">Name</th>
                        <th className="border border-x-gray-400 p-4 text-white">Email</th>
                        <th className="border border-x-gray-400 p-4 text-white">Phone</th>
                        <th className="border border-x-gray-400 p-4 text-white">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user: User, index: number) => (
                        <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="border border-x-gray-400 p-4 text-black">{user.name}</td>
                            <td className="border border-x-gray-400 p-4 text-black">{user.email}</td>
                            <td className="border border-x-gray-400 p-4 text-black">{user.phone}</td>
                            <td className="border border-x-gray-400 p-4 text-black">{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default withUsers(UsersTable);