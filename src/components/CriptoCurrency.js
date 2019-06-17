import React from 'react'

const CritoCurrency = ({ cripto }) => {
  const { FullName, Name } = cripto.CoinInfo
  return <option value={Name}>{FullName}</option>
}

export default CritoCurrency
