import React, { useState, useEffect } from 'react'
import axios from 'axios'
import image from './cryptomonedas.png'
import Form from './components/Form'

function App() {
  const [currency, setCurrency] = useState('')
  const [criptoCurrencyApp, setCriptoCurrencyApp] = useState('')

  useEffect(() => {
    const quoteCritoCurrency = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrencyApp}&tsyms=${currency}`
      console.log(criptoCurrencyApp)
      console.log(currency)

      const result = await axios.get(url)
      console.log(result)
    }
    quoteCritoCurrency()
  }, [criptoCurrencyApp, currency])

  return (
    <div className='container'>
      <div className='row'>
        <div className='one-half column'>
          <img src={image} alt='Imgágen criptomonedas' />
        </div>
        <div className='one-half column'>
          <h1>Cotiza criptomonedas al instante</h1>
          <Form
            setCurrency={setCurrency}
            setCriptoCurrencyApp={setCriptoCurrencyApp}
          />
        </div>
      </div>
    </div>
  )
}

export default App
