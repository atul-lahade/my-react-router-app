import React, { useContext } from 'react';
import AddTask from '~/components/TaskApp/AddTask';
import TaskProvider, { TaskContext } from '~/components/TaskApp/Task.context';
import TaskList from '~/components/TaskApp/TaskList';

const TaskApp: React.FC = () => {
    const context = useContext(TaskContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Task App</h1>
            <TaskProvider>
                <div className="flex flex-row gap-6">
                    <AddTask />
                    <TaskList />
                </div>
            </TaskProvider>
        </div>
    );
};

export default TaskApp;