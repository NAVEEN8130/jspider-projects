import React, { useEffect, useState } from 'react'

function Program2() {

      const [data, setData] = useState([])

      async function App() {
            let Url = await fetch("https://jsonplaceholder.typicode.com/posts")
            let response = await Url.json()
            setData(response)


      }

      useEffect(() => {
            App()
      }, [data])
      return (
            <div>
                  <table border={1}>
                        <thead>
                              <th>id </th>
                              <th>emp_id</th>
                              <th>title</th>


                        </thead>
                        <tbody>
                              {
                                    data.map((x) => {
                                          return (
                                                <div>

                                                      <tr><td>{x.id}</td>
                                                            <td>{x.title}</td>
                                                            <td>{x.body}</td>
                                                      </tr>
                                                </div>

                                          )
                                    })
                              }
                        </tbody>
                  </table>

            </div>
      )
}

export default Program2