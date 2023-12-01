import React, { useState, useRef, useMemo } from 'react'


function Practise2() {

      const [count1, setCount1] = useState(0)



      const [result, setResult] = useState(0)
      const [result1, setResult1] = useState(0)

      let dataref = useRef()
      let dataref2 = useRef()

      let plus = (e) => {
            e.preventDefault()
            setResult(Number(dataref.current.value) + Number(dataref2.current.value));
      }

      let minus = (e) => {
            e.preventDefault()
            setResult((dataref.current.value) - (dataref2.current.value))
      }
      let multi = (e) => {
            e.preventDefault()
            setResult((dataref.current.value) * (dataref2.current.value))
      }
      let div = (e) => {
            e.preventDefault()
            setResult((dataref.current.value) / (dataref2.current.value))
      }





      return (
            <div>


                  <label htmlFor="text">Enter number1</label>
                  <input type="text" ref={dataref2} /><br />
                  <label htmlFor="text" >Enter number2</label>
                  <input type="text" ref={dataref} />
                  <h1>{result}</h1>
                  <button onClick={plus}>+</button>
                  <button onClick={minus}>-</button>
                  <button onClick={multi}>*</button>
                  <button onClick={div}>/</button>
            </div>
      )
}

export default Practise2