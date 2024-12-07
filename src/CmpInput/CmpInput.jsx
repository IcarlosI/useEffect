import React from 'react'

const CmpInput = ({ input, setInput }) => {
  return (
    <div>
        <label htmlFor="personaje">Personaje</label>
        <input type="text" id='personaje' value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}

export default CmpInput