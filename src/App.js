import React from 'react'
import image from './cryptomonedas.png'
import Form from './components/Form'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='one-half column'>
          <img src={image} alt='Imgágen criptomonedas' />
        </div>
        <div className='one-half column'>
          <h1>Cotiza criptomonedas al instante</h1>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default App
