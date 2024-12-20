
export function generateFibonacciSeries(n: number): number[] {
    //console.log('Computing Fibonacci series for - ', n);

    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}   