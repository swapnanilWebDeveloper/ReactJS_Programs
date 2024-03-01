import {useState} from 'react'

function useCounter(myName="Mayuk Mukherjee", myEmail="Mayuk@gmail.com", myAddress="Barendranagar", myPhysics=99, 
                      myChemistry=88, myMathematics=97,
                    yourName="Suryendu Sarkar", yourEmail="Suryendu@gmail.com", yourAddress="Thanapara", yourPhysics=84, 
                      yourChemistry=65, yourMathematics=92) {
    const [name, setName] = useState(myName);
    const [email, setEmail] = useState(myEmail);
    const [address, setAddress] = useState(myAddress);
    const [phy,setPhy] = useState(myPhysics);
    const [chem, setChem] = useState(myChemistry);
    const [math, setMath] = useState(myMathematics);

    const [total, setTotal] = useState(myPhysics + myChemistry + myMathematics);

    const next_student = () => {
          setName(yourName);
          setEmail(yourEmail);
          setAddress(yourAddress);
          setPhy(yourPhysics);
          setChem(yourChemistry);
          setMath(yourMathematics);
          setTotal(yourPhysics + yourChemistry + yourMathematics)
    }

    const prev_student = () => {
        setName(myName);
        setEmail(myEmail);
        setAddress(myAddress);
        setPhy(myPhysics);
        setChem(myChemistry);
        setMath(myMathematics);
        setTotal(myPhysics + myChemistry + myMathematics);
  }

    return {name, email, address, phy, chem, math, total, next_student, prev_student}
}

export default useCounter
