import React from 'react'

function Form() {
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
