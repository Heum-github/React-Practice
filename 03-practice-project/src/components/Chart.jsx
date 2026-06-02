import { calculateInvestmentResults } from '../util/investment';

export default function Chart( { inputValue } ) {

    console.log(inputValue);

    const annualData = calculateInvestmentResults(inputValue);

    return (
        <table id = "result">
            <thead>
                <tr>
                    <th>Year</th>
                    <tr>Investment Value</tr>
                    <th>Interest (Year)</th>
                    <th>Total Investment</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((data) => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{data.interest}</td>
                        <td>{data.valueEndOfYear}</td>
                        <td>{data.annualInvestment}</td>
                        <td>{data.valueEndOfYear}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}