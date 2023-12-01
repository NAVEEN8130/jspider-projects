import { useState } from "react"


function Nav({ data, data1, }) {
      // console.log(x);
      // let card = [{
      //       name: "Naveen",
      //       Age: "22",
      //       Gender: "Male",
      //       image: "https://cdn0.careeraddict.com/uploads/article/59099/medium-illustration-man-suit.jpg",
      // }, {
      //       name: "ss",
      //       Age: "22",
      //       Gender: "Male",
      //       image: "https://cdn0.careeraddict.com/uploads/article/59099/medium-illustration-man-suit.jpg"

      // },
      // {
      //       name: "ss",
      //       Age: "22",
      //       Gender: "Male",
      //       image: "https://cdn0.careeraddict.com/uploads/article/59099/medium-illustration-man-suit.jpg"
      // }]


      // return <div>{x.date[0].map((y) => {
      //       return (
      //             <div>
      //                   <div className="card">
      //                         <h1>Name:{y.name}</h1>
      //                         <h1>Age:{y.Age} </h1>
      //                         <h1>Gender:{y.Gender}</h1>
      //                         <img src={y.image} alt="" />

      //                   </div>
      //             </div>
      //       )
      // })
      // }</div>

      return <div>
            <h1>{data1[0].name}</h1>
            {
                  data1.map((y) => {
                        return (

                              <div>
                                    <div className="card">
                                          <h1>Name:{y.name}</h1>
                                          <h1>Age:{y.Age} </h1>
                                          <h1>Gender:{y.Gender}</h1>
                                          <img src={y.image} alt="" />

                                    </div>
                              </div>

                        )
                  })
            }

            <div>{data.map((x1) => {
                  return (
                        <div>
                              {/* <h1>{x1.name}</h1> */}
                              <p>My name is {x1.name}, I am {x1.age} ears yold </p>
                              <p>working as Uideveloper .</p>
                              <p>these are the skills</p>
                              <ol>
                                    <li>{x1.skills[0]}</li>
                                    <li>{x1.skills[1]}</li>
                                    <li>{x1.skills[2]}</li>
                              </ol>
                              <p>I have few friends they are</p>
                              <ol>
                                    <li>{x1.friends[0].name} skills are( {x1.friends[0].skills[0]},{x1.friends[0].skills[1]})</li>
                                    <li>{x1.friends[1].name} skills are( {x1.friends[1].skills[0]},{x1.friends[1].skills[1]})</li>
                                    <li>{x1.friends[2].name} skills are ({x1.friends[2].skills[0]},{x1.friends[2].skills[1]})</li>
                              </ol>
                        </div>
                  )
            })}
            </div>
      </div>



}
export default Nav