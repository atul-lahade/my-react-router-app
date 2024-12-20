import type { User } from "../types/User";
import withUsers from "../withUsers";

type UserListProps = {
    users: User[];
}

function UserList(props: UserListProps) {

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen space-y-4">
            <h2>Users List View</h2>
            <ul className="w-full max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-lg">
                {props.users.map((user: User, index: number) => (
                    <li key={user.id} className={`p-4 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b border-gray-200 text-black`}>
                        <div className="flex justify-between">
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div>{user.phone}</div>
                            <div>{user.website}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default withUsers(UserList);