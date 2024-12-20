import { createContext, useState } from "react";

export type Task = {
    id: string;
    name: string;
    isComplete: boolean;
}

export type TaskContextType = {
    tasks: Task[];
    addTask: (task: string) => void;
    removeTask: () => void;
}

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    addTask: () => { },
    removeTask: () => { },
});

type TaskProviderProps = {
    readonly children: React.ReactNode;
};

export default function TaskProvider(props: TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (newTask: string) => {
        const task: Task = {
            id: new Date().getTime().toString(),
            name: newTask,
            isComplete: false
        }
        setTasks([...tasks, task]);
    }

    const removeTask = () => {
        const newTasks = tasks.filter(task => !task.isComplete);
        //alert('Tasks: ' + JSON.stringify(newTasks));
        setTasks(newTasks);
    }

    return (
        <TaskContext.Provider value={{ tasks: tasks, addTask: addTask, removeTask: removeTask }}>
            {props.children}
        </TaskContext.Provider>
    );
}