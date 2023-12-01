import { useMemo, useState } from "react";

const Number = () => {

      const [variable, setVariable] = useState("Hii")



















      // const [count, setCount] = useState(0)


      // function increment() {
      //       setCount((c) => c + 1);
      // }

      // function decrement() {
      //       setCount((c) => c - 1);
      // }

      // function reset() {
      //       setCount(0)
      // }




      // const [total] = useState([10, 29, 20])

      // const totalvalue = total.reduce((previuseValue, current) => previuseValue + current, 0)

      // console.log(totalvalue);


      function set() {
      }

      const change = () => {
            setVariable("Bye")

      }



      return (
            <div>
                  <h1>{variable}</h1>
                  <button onClick={change}>Change Name</button>







                  {/* 

                  <h1>{count}</h1>




                  <button onClick={increment} style={{ border: "2px solid green", color: "green", fontSize: "14px" }}>Increament</button>
                  <button onClick={decrement} style={{ border: "2px solid blue", color: "blue", margin: "0px 5px", fontSize: "14px" }} >decrement</button>
                  <button onClick={reset} style={{ border: "2px solid red", color: "red", fontSize: "14px" }}>Reset</button> */}

            </div>
      )
}
export default Number