import { Fragment, useEffect, useState } from "react"
import users from "./userData.json"

const Program = () => {
      const [data, setData] = useState([])

      async function details() {
            let Url = await fetch("https://api.github.com/users")
            let response = await Url.json();
            // let api = response.slice(4, 8)



            setData(response)


      }
      useEffect(() => {
            details()
      }, [data])
      // const [data, setData] = useState(users)


      return (


            <div>
                  {/* {
                        data.map((x) => {
                              return (
                                    <h1>{x.login}</h1>
                              )
                        })
                  } */}
                  <table border={1}>
                        <thead>
                              <th>id </th>
                              <th>Picture</th>
                              <th>Login</th>
                              <th>node_id</th>
                              <th>Types</th>

                        </thead>
                        <tbody>
                              {
                                    data.map((x) => {
                                          return (

                                                <Fragment key={x.id}>
                                                      <tr>
                                                            <td>{x.id}</td>
                                                            <td><img width={100} src={x.avatar_url} alt="" /></td>
                                                            <td>{x.login}</td>
                                                            <td>{x.node_id}</td>
                                                            <td>{x.type}</td></tr>
                                                </Fragment>

                                          )
                                    })
                              }
                        </tbody>
                  </table>

            </div >


      )



}
export default Program