import React from 'react'

const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null
  return (
    <div className="result">
      <h1>Resultado</h1>
    </div>
  )
}

export default Quote
