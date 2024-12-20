import { useRef, useState } from "react";
import { useParams } from "react-router";

type Employee = {
    name: string;
    id: number;
};

const employees1: Employee[] = [
    { name: 'Amogh', id: 1 },
    { name: 'Atul', id: 2 },
    { name: 'Ketaki', id: 3 },
    { name: 'Mahendra', id: 4 },
    { name: 'Dharmendra', id: 5 },
    { name: 'Santosh', id: 6 }
];

const employees2: Employee[] = [
    { name: 'Manoj', id: 1 },
    { name: 'Surabhi', id: 2 },
    { name: 'Ulga', id: 3 },
    { name: 'Dynaneshwar', id: 4 }
];

const departmentEmployees: Record<number, Employee[]> = {
    1001: employees1,
    1002: employees2
}


export default function WhosNext() {
    const [queue, setQueue] = useState<Employee[]>([]);
    //const [duplicateEmployees, setDuplicateEmployees] = useState<Employee[]>(employees);

    const params = useParams<{ deptId: string }>();
    const deptId = parseInt(params.deptId ?? '1001', 10);

    const employeesCopy = useRef<Employee[]>([...departmentEmployees[deptId]]);

    function handleNext(): void {
        if (employeesCopy.current.length === 0) return;
        const randomIndex = Math.floor(Math.random() * employeesCopy.current.length);
        const [nextEmployee] = employeesCopy.current.splice(randomIndex, 1);
        setQueue([...queue, nextEmployee]);
    }

    function handleRestart(): void {
        setQueue([]);
        employeesCopy.current = [...departmentEmployees[deptId]];
    }

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold text-center">Who demoes Next?</h1>
            <div className="flex justify-around">
                <button
                    onClick={handleNext}
                    disabled={employeesCopy.current.length === 0}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
                >
                    Next
                </button>
                <button
                    onClick={handleRestart}
                    disabled={queue.length === 0}
                    className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-400"
                >
                    Restart
                </button>
            </div>
            <div className="space-y-2">
                {queue.map(employee => (
                    <div key={employee.id} className="p-2 bg-gray-800 rounded">
                        {employee.name}
                    </div>
                ))}
            </div>
        </div>
    )
}