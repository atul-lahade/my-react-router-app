import React from 'react';
import UserList from '~/components/Users/UserList';
import UsersTable from '~/components/Users/UsersTable';

const Users: React.FC = () => {

    return (
        <div className="flex flex-row gap-6">
            <UsersTable />
            <UserList />
        </div>
    );
};

export default Users;