import axios from "axios";
import { useEffect, useState, type FC } from "react";
import type { User } from "./types/User";

const url = 'https://jsonplaceholder.typicode.com/users';

type PropsType = {
    users: User[];
}

export default function withUsers(Component: FC<PropsType>) {
    return function UsersHOC() {
        const [users, setUsers] = useState<User[]>([]);

        useEffect(() => {
            axios.get(url).then(response => setUsers(response.data));
        }, []);

        return <Component users={users} />;
    }
}