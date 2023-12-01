import React, { useState } from 'react'

function Controlled() {
      // let [res, setresult] = useState(" ")
      // let [res2, setresult2] = useState(" ")
      // let [res3, setresult3] = useState(" ")

      // let nameData = (e) => {
      //       setresult(e.target.value)
      //       // console.log(e.target.value);
      // }


      // let toHandle = (e) => {
      //       e.preventDefault()
      //       console.log("name:", res);
      //       console.log("company:", res2);
      //       console.log("salary:", res3);

      // }
      // let companyChange = (e) => {
      //       setresult2(e.target.value)
      // }


      // let salaryChange = (e) => {
      //       setresult3(e.target.value)
      // }

      let [num1, setNum1] = useState("")
      let [num2, setNum2] = useState("")

      let number1 = (e) => {
            setNum1(e.target.value)
      }

      let number2 = (e) => {
            setNum2(e.target.value)
      }


      let plus = (e) => {
            e.preventDefault();
            console.log(Number(num1) + Number(num2));

      }

      let minus = (e) => {
            e.preventDefault()
            console.log(num1 - num2);
      }

      return (
            <div>
                  <form action="">
                        <label htmlFor="">Enteer Number 1</label>
                        <input type="text" value={num1} onChange={number1} /><br />
                        <label htmlFor="">Enter Number 2333</label>
                        <input type="text" value={num2} onChange={number2} />
                  </form>
                  <button onClick={plus}>+</button>
                  <button onClick={minus}>-</button>
                  <button>*</button>
                  <button>/</button>

                  {/*                   
                  <form action="">
                        <label htmlFor="">Enter Name</label>
                        <input type="text" value={res} onChange={nameData} /><br />
                        <label htmlFor="">Enter Company name</label>
                        <input type="text" value={res2} onChange={companyChange} /><br />
                        <label htmlFor="">Enter salary</label>
                        <input type="text" value={res3} onChange={salaryChange} /><br />
                        <button onClick={toHandle} >submit</button>

                  </form> */}
            </div>
      )
}

export default Controlled