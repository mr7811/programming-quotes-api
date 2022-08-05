import React from 'react'

export default function Quote(props) {
  const {data} = props
  return (
    <div className="Quote-container">
      <h1>Quote : <div>{data.quote}</div></h1>
      <h1>Author: {data.author}</h1>
    </div>
  )
}
