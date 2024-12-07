import React from 'react'

const CmpData = ({data}) => {
    console.log(data)
    const {name, race, ki, description} = data
  return (
    <div>
        <p><span>Name: </span>{name}</p>
        <p><span>Race: </span>{race}</p>
        <p><span>Ki: </span>{ki}</p>
        <p><span>Description: </span>{description}</p>
    </div>
  )
}

export default CmpData