import style from "./reactcss.module.css"
const Reactcss = () => {
      return (
            <div>
                  <h1 id={style.heading}>Global</h1>
                  {/* <h1 style={{ backgroundColor: "red", color: "blue" }}>Inline</h1> */}
            </div>
      )
}
export default Reactcss