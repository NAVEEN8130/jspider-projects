import { useMemo, useState } from "react"


const Practise = (props) => {

      const [value, setValue] = useState("hi")

      const [numbers] = useState([12, 33, 44, 55])

      const totalnumbers = useMemo(() => (numbers.reduce((previuse, current) => previuse + current, 0)))
      console.log(totalnumbers);

      const [name] = useState(["bangalore", "mangalore", "trichy", "ambur"])

      const namevariable = [...name].sort()
      console.log();

      // const [list, setList] = useState(["naveen", "varun"])

      // const [count, setCount] = useState("")

      // const setFunction = () => {
      //       list.push(count)
      // }



      // return (
      //       <div>

      //             <ol>
      //                   {
      //                         list.map((x, i) => (
      //                               <li key={i}>{x}</li>
      //                         ))

      //                   }
      //             </ol>






      //             <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      //             <button onClick={setFunction}>
      //                   add name
      //             </button>
      //       </div>)


      function addChange() {
            setValue("Hello")



      }


      return (
            <div>

                  <h1>{value}</h1>
                  <button onClick={addChange}>Greet</button>
                  <br></br>


                  <div>totalnumbers {totalnumbers}</div>
                  <div>name {name.join(", ")}</div>
                  <div>namevariable {namevariable.join(", ")}</div>
            </div>
      )
}
export default Practise