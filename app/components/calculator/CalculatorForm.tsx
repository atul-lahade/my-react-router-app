import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

export type CalculatorData = {
    number1: number;
    number2: number;
    operation: string;
}

const apiUrl = "https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData";

type CalculatorFormProps = {
    readonly onCalculate: (data: CalculatorData) => void;
    readonly onAns: (ans: number) => void;
}

export default function CalculatorForm(props: CalculatorFormProps) {

    //get number 1 and number 2 from the form and calculate the answer and show it in the input field of answer
    const [calcData, setCalcData] = useState({
        number1: 0,
        number2: 0,
        operation: '+'
    });

    const [answer, setAnswer] = useState<number>();
    const firstNumberRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        //effect code
        // side effect code
        // they execute after the react component has rendered itself
        // they help react component to synchronize with the third party libraries/browser/network/apis/logging

        // side effect should run only on inital mount
        firstNumberRef.current!.focus();

        axios.get(apiUrl).then((response) => {
            console.log(response.data);
            const number1 = Number(response.data.firstNo);
            const number2 = Number(response.data.secondNo);
            const operation = response.data.operation;
            setCalcData({
                number1,
                number2,
                operation
            });
            props.onCalculate({
                number1,
                number2,
                operation
            });
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const newState = { ...calcData, [name]: name === 'operation' ? value : Number(value) };
        setCalcData(newState);
        props.onCalculate(newState);
    };

    function handleSubmit(): void {
        const { number1, number2, operation } = calcData;
        //console.log(number1, number2, operation);

        let result: number;
        switch (operation) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            default:
                result = 0;
        }
        setAnswer(result);
        props.onAns(result!);
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Calculator</h1>
            <div className="space-y-4">
                <div>
                    <label htmlFor="number1" className="block text-sm font-medium text-gray-700">Number 1</label>
                    <input type="number" ref={firstNumberRef} value={calcData.number1} id="number1" name="number1" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="operation" className="block text-sm font-medium text-gray-700">Operation</label>
                    <select id="operation" name="operation" value={calcData.operation} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleInputChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="number2" className="block text-sm font-medium text-gray-700">Number 2</label>
                    <input type="number" id="number2" value={calcData.number2} name="number2" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleInputChange} />
                </div>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleSubmit}>
                    Calculate
                </button>
            </div>
            <div className="flex justify-center mt-4"></div>
            <label htmlFor="Answer" className="block text-sm font-medium text-gray-700">Answer</label>
            <input type="text" name="ans" readOnly value={answer} placeholder='Answer' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
    );
}