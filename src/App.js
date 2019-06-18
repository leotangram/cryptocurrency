import React, { useState, useEffect } from 'react'
import axios from 'axios'
import image from './cryptomonedas.png'
import Form from './components/Form'
import Spinner from './components/Spinner'
import Quote from './components/Quote'

function App() {
  const [currency, setCurrency] = useState('')
  const [criptoCurrencyApp, setCriptoCurrencyApp] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({})

  useEffect(() => {
    const quoteCritoCurrency = async () => {
      // Si no hay moneda, no ejecutar
      if (currency === '') return

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrencyApp}&tsyms=${currency}`
      console.log(criptoCurrencyApp)
      console.log(currency)

      const result = await axios.get(url)
      // Mostrar spinner
      setLoading(true)
      setTimeout(() => {
        // Ocultar spinner
        setLoading(false)

        // Agregar el resultado
        setResult(result.data.DISPLAY[criptoCurrencyApp][currency])
      }, 3000)
    }
    quoteCritoCurrency()
  }, [criptoCurrencyApp, currency])

  // Mostrar spinner o resultado
  const component = loading ? <Spinner /> : <Quote result={result} />

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={image} alt="Imgágen criptomonedas" />
        </div>
        <div className="one-half column">
          <h1>Cotiza criptomonedas al instante</h1>
          <Form
            setCurrency={setCurrency}
            setCriptoCurrencyApp={setCriptoCurrencyApp}
          />
          {component}
        </div>
      </div>
    </div>
  )
}

export default App
