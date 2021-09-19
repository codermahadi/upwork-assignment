import React, {useState} from "react";

import './calculator.scss';
import axios from "axios";

const Calculator = () => {
    const [valueOne, setValueOne] = useState(0);
    const [valueTwo, setValueTwo] = useState(0);
    const [results, setResults] = useState([]);

    const sumData = async (e) => {
        e.preventDefault();
        var body = {
            valueOne: valueOne,
            valueTwo: valueTwo
        };

        await axios.post("http://127.0.0.1:8000/api/sum-data", body)
            .then(res => {
                setResults(results.concat(res.data.item));
            })
            .catch(err => console.error(err));

        setValueOne(0);
        setValueTwo(0);
    }
    return (
        <div className='calculatorWrap'>
            <div className="header">
                <h2>Calculator</h2>
            </div>
            <div className="calculatorBody">
                <p>Enter the numbers</p>
                <div className="inputContent">
                    <form onSubmit={(e) => sumData(e)}>
                        <div className="input">
                            <input type="text" onChange={(e) => setValueOne(e.target.value)} value={valueOne} placeholder={'number 1'}/>
                        </div>
                        <div className="input">
                            <input type="text" onChange={(e) => setValueTwo(e.target.value)} value={valueTwo}  placeholder={'number 2'}/>
                        </div>
                        <button type="submit" className="btnSum">Sum</button>
                    </form>
                    <p>Result</p>
                    {
                        results.length > 0 && results.map((item, i) =>
                            <input key={i} type="text" className={'result'} value={item} placeholder={'12342'}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Calculator;
