import { useMemo, useState } from "react";
import CalculatorForm, { type CalculatorData } from "../components/calculator/CalculatorForm";
import LiveExp from "../components/calculator/LiveExp";
import CustomVideoPlayer from "../components/custom-video-player";
import { generateFibonacciSeries } from "../components/Utils/series";

export default function Calculator() {

    const [calcData, setCalcData] = useState<CalculatorData>({ number1: 0, number2: 0, operation: "+" });
    const [ans, setAns] = useState<number>(0);


    const handleCalculateData = (calcData: CalculatorData) => {
        setCalcData(calcData);
    }

    const handleAns = (ans: number) => {
        setAns(ans);
    }

    // Heavy computation
    const fiboSeries = useMemo(() => generateFibonacciSeries(ans), [ans]);

    // ! This is wrong, useEffect should not be used for this purpose
    /* useEffect(() => {
        const fiboSeries = generateFibonacciSeries(ans);
    }, [ans]); */

    return (
        <div className="flex flex-row gap-4 items-center p-4 bg-gray-500 rounded-lg shadow-md">
            <CalculatorForm onCalculate={handleCalculateData} onAns={handleAns}></CalculatorForm>
            <LiveExp calcData={calcData} ans={ans} />
            <div className="flex flex-col gap-4 items-center p-4 bg-white rounded-lg shadow-md w-full h-full">
                <h2 className="text-2xl font-bold text-black">Fibonacci Series</h2>
                <div className="overflow-y-auto max-h-64 w-full scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
                    {fiboSeries.map((num, index) => (
                        <span key={index} className={index % 2 === 0 ? "text-black" : "text-pink-900"}>
                            {num}{index < fiboSeries.length - 1 && ', '}
                        </span>
                    ))}
                </div>
            </div>
            <CustomVideoPlayer url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={ans === 13} />
        </div>
    );
}