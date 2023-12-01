import { useState, useMemo, useEffect } from "react"

const Statea = () => {

      //       let [data, setData] = useState("Hii")
      //       let clicked = () => {
      //             setData("Bye")

      //       }

      //       return (
      //             <div>
      //                   <h1>{data}</h1>
      //                   <button onClick={clicked}>click</button>
      //             </div>
      //       )


      let [total] = useState([10, 2, 30, 40])

      let totalAll = total.reduce((pre, cre) => pre + cre, 0)

      console.log(totalAll);










      const [obj, setObj] = useState([{ name: "naveen", age: 22 }, { name: "varun", age: 24 }])

      let [data, setData] = useState(0)
      let incre = () => {
            setData(data + 1)
      }
      let decre = () => {
            setData((e) => e - 1)
      }
      let reset = () => {
            setData(0)
      }

      function logger() {
            console.log("Hello");
      }

      useEffect(() => {
            logger()
      }, [data])

      const [val1, setVal1] = useState(2);
      const [val, setVal] = useState(0);

      const total1 = useMemo(() => val1 + val, [val1, val]);
      return (
            <div>



                  <button onClick={() => setVal1(val1 + 1)}>Count{val1}</button>
                  <button onClick={() => setVal(val + 1)}>Count{val}</button>
                  <button>total{total1}</button>


                  <h1>{obj[0].name}{obj[0].age}</h1>
                  <h1>{obj[1].name}{obj[1].age}</h1>

                  <h1>{data}</h1>
                  <button onClick={incre}>increment</button>
                  <button onClick={decre}>decrement</button>
                  <button onClick={reset}>reset</button>
            </div >
      )
}
export default Statea