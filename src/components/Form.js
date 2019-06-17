import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CritoCurrency from './CriptoCurrency'

function Form() {
  const [criptocurrency, setCriptocurrency] = useState([])
  const [coinQuote, setCoinQuote] = useState('')
  const [criptoQuote, setCriptoQuote] = useState('')
  const [error, setError] = useState(false)

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
        <select
          name=''
          id=''
          className='u-full-width'
          onChange={e => setCoinQuote(e.target.value)}
        >
          <option value=''>- Elige tu moneda -</option>
          <option value='COP'>Peso colombiano</option>
          <option value='USD'>Dolar estadounidense</option>
          <option value='GBP'>Libras</option>
          <option value='EUR'>Euro</option>
        </select>
      </div>
      <div className='row'>
        <label>Elige tu criptomodena</label>
        <select
          name=''
          id=''
          className='u-full-width'
          onChange={e => setCriptoQuote(e.target.value)}
        >
          <option value=''>- Elige tu criptomoneda -</option>
          {criptocurrency.map(cripto => (
            <CritoCurrency key={cripto.CoinInfo.Id} cripto={cripto} />
          ))}
        </select>
      </div>
    </form>
  )
}

export default Form
