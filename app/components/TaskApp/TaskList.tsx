import { useContext } from 'react';
import { TaskContext, type Task } from './Task.context';

export default function TaskList() {

    const context = useContext(TaskContext);

    const handleCheck = (taskId: string, isChecked: boolean) => {
        //alert('Task ID: ' + taskId + ' is checked: ' + isChecked);
        context.tasks.forEach((task: Task) => {
            if (task.id === taskId) {
                //alert('Task ID: ' + task.id + ' is checked: ' + task.isComplete + ' name: ' + task.name);
                task.isComplete = isChecked;
                //alert('Task ID: ' + task.id + ' is checked: ' + task.isComplete + ' name: ' + task.name);
            }
        });
    };

    function handleClear() {
        context.removeTask();
    }

    return (
        <>
            <div className="p-4 bg-white rounded shadow-md">
                <h2 className="text-black font-bold mb-4 text-center">Tasks List</h2>
                <div className="space-y-2">
                    {context.tasks.map((task: Task) => (
                        <div key={task.id} className='flex gap-4 items-center hover:bg-gray-100 p-2 rounded transition duration-200'>
                            <input
                                type='checkbox'
                                className="form-checkbox h-5 w-5 text-blue-600"
                                onChange={(e) => handleCheck(task.id, e.target.checked)}
                            />
                            <span className="text-gray-800">{task.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <button className="bg-red-300 hover:bg-red-600  text-black px-4 py-2 rounded flex items-center" onClick={handleClear}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-1 1v1H5a1 1 0 000 2h10a1 1 0 100-2h-3V3a1 1 0 00-1-1H9zM5 7a1 1 0 011 1v7a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 112 0v7a3 3 0 01-3 3H7a3 3 0 01-3-3V8a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Clear Completed Tasks
                </button>
            </div>
        </>
    );
};

