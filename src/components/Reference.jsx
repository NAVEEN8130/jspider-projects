import { useRef } from "react"

const Reference = () => {

      let userData = useRef()
      let userData2 = useRef()
      let userData3 = useRef()

      let toaddHandle = (e) => {
            e.preventDefault()
            console.log(userData.current.value);
            console.log(userData2.current.value);
            console.log(userData3.current.value);
      }


      return (
            <div>
                  <form action="">
                        <label htmlFor="text">Enter Employe Name</label>
                        <input type="text" ref={userData} /><br />
                        <label htmlFor="text">Enter Employee Age</label>
                        <input type="text" ref={userData2} /><br />
                        <label htmlFor="text">Enter Employee salary</label>
                        <input type="text" ref={userData3} />
                        <button onClick={toaddHandle}>ToSubmit</button>
                  </form>
            </div>
      )
}
export default Reference