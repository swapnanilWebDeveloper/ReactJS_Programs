import {useMemo, useDefferedValue, useEffect} from 'react'

export default function List({input}) {

    const DataSize = 5000;
    const defferedInput = useDefferedValue(input);
    const list = useMemo(() => {
        const a = [];
        for(let i = 0; i < DataSize; i++){
             a.push(<div key={i}>{defferedInput}</div>);
        }
        return a;
    },[defferedInput]);

    useEffect(() => {
        console.log("Input : "+input+" deffered : "+defferedInput)
    })

  return List;
}
