import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Form() {
  const [criptocurrency, setCriptocurrency] = useState([])

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD`

      const result = await axios.get(url)
      
      // Colocar respuesta en el state
      setCriptocurrency(result.data.Data)
    }

    consultAPI()
  }, [])
  return (
    <form>
      <div className='row'>
        <label>Elige tu moneda</label>
        <select name='' id='' className="u-full-width">
          <option value=''>- Elige tu moneda -</option>
          <option value='COP'>Peso colombiano</option>
          <option value='USD'>Dolar estadounidense</option>
          <option value='GBP'>Libras</option>
          <option value='EUR'>Euro</option>
        </select>
      </div>
      <div className='row'>
        <label>Elige tu criptomodena</label>
        <select name="" id="" className='u-full-width'></select>
      </div>
    </form>
  )
}

export default Form
