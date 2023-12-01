import React, { useRef } from 'react'




function Reftask() {
      let number1 = useRef()
      let number2 = useRef()



      let toplus = (e) => {
            e.preventDefault()
            console.log(Number(number1.current.value) + Number(number2.current.value));
            console.log(number1.current.value);


      }
      let minus = (e) => {
            e.preventDefault()
            console.log((number1.current.value) - (number2.current.value));
      }

      let multi = (e) => {
            e.preventDefault()

            console.log((number1.current.value) * (number2.current.value));

      }
      let div = (e) => {
            e.preventDefault()
            console.log((number1.current.value) / (number2.current.value));
      }


      return (
            <div>
                  <label htmlFor="text">Enter Number 1</label>
                  <input type="text" ref={number1} /><br />
                  <h1 ref={number1}>h1</h1>

                  <label htmlFor="text">Enter Number 2</label>
                  <input type="text" ref={number2} /><br />
                  <button onClick={toplus}>+</button>
                  <button onClick={minus}>-</button>
                  <button onClick={multi}>*</button>
                  <button onClick={div}>/</button>
            </div>
      )
}

export default Reftask