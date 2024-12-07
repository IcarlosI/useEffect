import { useEffect, useState } from 'react'
import './App.css'
import CmpInput from './CmpInput/CmpInput'
import CmpData from './CmpData/CmpData'

function App() {
  const [apiData, setApiData ] = useState({})
  const [input, setInput] = useState('')
  const [search, setSearch] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?name=${input}`)
      const data = await response.json()
      setApiData(data[0])
      setSearch(false)
    } catch (error) {
      console.error('Error fetching data: ', error )
    }
  }

  useEffect(() => {
    fetchData();
  }, [search])

  return (
    <>

      <div className="content">

        <div className="card">

          <div className="imagenes">

            {
              apiData && (
                <img src={apiData.image} alt="Imagen" />
              )
            }
            
          </div>

          <div className="browse">

            <CmpInput input={input} setInput={setInput} />
            <button onClick={() => setSearch(true)}>Buscar</button>

          </div>

          <div className="info">

            {
              apiData && (
                <CmpData data={apiData} />
              )
            }

          </div>

        </div>


      </div>


      
      

      
    </>
  )
}

export default App
