import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Chart( { inputValue } ) {

    console.log(inputValue);

    const resultData = calculateInvestmentResults(inputValue);

    const initialInvestment =
      resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment; 

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
                {resultData.map((data) => {
                    const totalInvestment = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    const totalAmontInvestment = data.valueEndOfYear - totalInvestment;
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>
                            <td>{formatter.format(totalAmontInvestment)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}