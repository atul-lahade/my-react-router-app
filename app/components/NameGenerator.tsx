import { type ChangeEvent } from 'react';
import { useImmer } from 'use-immer';

type NameGenerator = Readonly<{
    firstName: string;
    lastName: string;
}>

export default function NameGenerator(props: NameGenerator) {
    const [nameComp, setNameComp] = useImmer<NameGenerator>({ firstName: props.firstName, lastName: props.lastName });

    const fullName = `${nameComp.firstName} ${nameComp.lastName}`.toUpperCase();

    function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.currentTarget;
        const key = name as keyof NameGenerator;
        setNameComp((draft) => { draft[key] = value });
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Name Generator</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue={props.firstName}
                    onInput={handleNameChange}
                    name='firstName'
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={nameComp.lastName}
                    onInput={handleNameChange}
                    name='lastName'
                />
            </form>
            {fullName && <h1 className="mt-6 text-xl font-semibold text-gray-900">{fullName}</h1>}
        </div>
    )
};
