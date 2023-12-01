// import Nav from "./components/Nav"
// import Content from "./components/Content"
// import Info from "./components/Info"
// import Number from "./components/Number"
// import Statea from "./components/Statea"
// import Practise from "./components/Practise"
// import Program2 from "./components/Program2"
// import Program from "./components/Program"
// import Reactcss from "./components/Reactcss"
//css import
// import "./global.css"
// import Reference from "./components/Reference"
// import Reftask from "./components/Reftask"
// import Practise2 from "./components/Practise2"
import Controlled from "./components/Controlled"
function App() {




      let card = [{
            name: "Naveen",
            Age: "22",
            Gender: "Male",
            image: "https://cdn0.careeraddict.com/uploads/article/59099/medium-illustration-man-suit.jpg",
      }, {
            name: "ss",
            Age: "22",
            Gender: "Male",
            image: "https://cdn0.careeraddict.com/uploads/article/59099/medium-illustration-man-suit.jpg"

      },
      {
            name: "ss",
            Age: "22",
            Gender: "Male",
            image: "https://cdn0.careeraddict.com/uploads/article/59099/medium-illustration-man-suit.jpg"
      }, {
            name: "ss",
            Age: "22",
            Gender: "Male",
            image: "https://cdn0.careeraddict.com/uploads/article/59099/medium-illustration-man-suit.jpg"
      }]

      const Uideveloper = [{
            name: "Abhi",
            age: 25,
            skills: ["html", "css", "js"],
            friends: [{ name: "kiran", skills: ["java", "sql"] },
            { name: "rahul", skills: ["javascript", "mangodb"] },
            { name: "rihit", skills: ["js", "reactjs"] }]

      }, {
            name: "Abhi",
            age: 25,
            skills: ["html", "css", "js"],
            friends: [{ name: "kiran", skills: ["java", "sql"] },
            { name: "rahul", skills: ["javascript", "mangodb"] },
            { name: "rihit", skills: ["js", "reactjs"] }]
      }, {
            name: "Abhi",
            age: 25,
            skills: ["html", "css", "js"],
            friends: [{ name: "kiran", skills: ["java", "sql"] },
            { name: "rahul", skills: ["javascript", "mangodb"] },
            { name: "rihit", skills: ["js", "reactjs"] }]
      }]



      return (
            <>
                  <Controlled />
                  {/* <Practise2 /> */}
                  {/* <Reference /> */}
                  {/* <Reftask /> */}
                  {/* <Reactcss /> */}
                  {/* <Practise /> */}
                  {/* <Number /> */}
                  {/* <Statea /> */}
                  {/* <Program2 /> */}
                  {/* <Program /> */}
                  {/* <Nav data={Uideveloper} data1={card} /> */}
                  {/* <Nav data="galaxy" /> */}
                  {/* <Nav data="universal" /> */}

                  {/* <Content data="hiii" /> */}
                  {/* <Info></Info> */}
            </>
      )
}

export default App