import type { CalculatorData } from "./CalculatorForm";

type LiveExpProps = {
    calcData: CalculatorData;
    ans: number;
}

export default function LiveExp(props: LiveExpProps) {
    return (
        <div className="flex flex-col gap-4 items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-gray-500">****************************</div>
            <h1 className="text-2xl font-bold text-gray-800">Live Expression</h1>
            <div className="text-lg font-mono bg-white p-2 rounded border border-gray-300">
                <span className="text-blue-500">
                    {`${props.calcData.number1} ${props.calcData.operation} ${props.calcData.number2} = ${props.ans}`}
                </span>
            </div>
            <div className="text-gray-500">****************************</div>
        </div>
    );
}