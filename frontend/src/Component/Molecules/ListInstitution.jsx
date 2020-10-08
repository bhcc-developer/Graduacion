import React, {useState} from 'react'
import Card from './Card'

const ListInstitution = () => {

  const [institution, setInstitution] = useState([
    {name: 'Ministerio Público'},
    {name: 'Ministerio de Educación'},
    {name: 'IDPP'}
  ])

  return (
    <>
      <div className="l-block"></div>
      <div className="ed-grid s-grid-3">
        {
          institution.map(({name}) => (
            <Card name={name} />
          ))
        }
      </div>
    </>
  )
}

export default ListInstitution
