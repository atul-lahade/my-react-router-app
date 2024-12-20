import React, { useContext, useRef, useState } from 'react';
import { TaskContext } from './Task.context';

export default function AddTask() {
    const context = useContext(TaskContext);

    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const handleClick = () => {
        context.addTask(inputValue);
        setInputValue('');
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div className='p-4 bg-white shadow-md rounded-md'>
            <div className='flex gap-4 items-center'>
                <input
                    type='text'
                    ref={inputRef}
                    className='flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter task'
                    value={inputValue}
                    onChange={handleOnChange}
                />
                <button
                    className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 flex items-center gap-2 ${inputValue ? 'bg-green-300 text-black hover:bg-green-600 focus:ring-blue-500' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    onClick={handleClick}
                    disabled={!inputValue}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Task
                </button>
            </div>
            <h2 className='mt-4 text-lg font-semibold text-gray-700'>
                {inputValue}
            </h2>
        </div>
    );
}