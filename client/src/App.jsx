
import { useEffect,useState } from 'react'
import Papa from 'papaparse'
import './App.css'

function App() {

  let host = `http://localhost:4000`
  // if (process.env.environment === `production`) {
  //   port = `https://vite-playground.herokuapp.com/`
  // }

  useEffect(() => {
    fetch(`${host}/api/getPerson`)
    .then(res => res.json())
    .then(res => console.log(res))
  },[])

  const getPerson = () => {
    fetch(`${host}/api/getPerson`)
    .then(res => res.json())
    .then(res => console.log(res))
  }

  // const [amazonUsSales,setAmazonUsSales] = useState(null)

  // const data = {
  //   person: "Caleb"
  // }

  // useEffect(() => {
  //   fetch(`http://localhost:4000/api/blob`,{
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data),
  //     cors: `no-cors`,
  //   })
  //   .then(res => {
  //     console.log(res)
  //     return res.blob()
  //     // return res.json()
  //   })
  //   .then(async res => {
  //     console.log(res)
  //     const data = await Papa.parse(res,{header: true, complete: (results,file) => {
  //       console.log(results)
  //       setAmazonUsSales(results.data)
  //       return results
  //     }})
  //   })
  //   .catch(res => {
  //     console.log(res)
  //   })
  // },[])

  return (
    <div className="App">
      {/* <div>
        {amazonUsSales !== null ? amazonUsSales.map((row,index) => {
          console.log("hi")
          if (index === 1) {
            return <div>
              <p>hello</p>
            </div>
          }
        }) : <div></div>}
      </div> */}

      <div>
        <p>hello</p>
        <button onClick={(e) => {getPerson()}}>console.log person</button>
      </div>
    </div>
  )
}

export default App
