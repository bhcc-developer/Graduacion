import React from 'react'
import { Link } from 'react-router-dom'
import {rolUser} from '../Config/Config'

const Banner = () => {
  const rol = localStorage.getItem('rol')

  let images = ''
  let title = ''

  if (rol === rolUser.Admin) {
    images = 'Admin.png'
    title = 'Sistema Nacionacional de Violencia Contra la Mujer'
  }
  if (rol === rolUser.MP) {
    images = 'MP.jpg'
    title = 'Ministerio Público'
  }
 
  return (
    <div className="main-banner img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src={images} alt={rol}/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">{title}</p>
            <p>Subtítulo del banner</p>
            {/* <Link to="#" className="button">Botón del banner</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
