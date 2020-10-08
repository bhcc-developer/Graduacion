import React from 'react'
import Axios from 'axios';
import {URL} from '../Config/Config'

const authentication = e => {
  e.preventDefault()
  const form = e.target
  
  const data = {
    "username": form.username.value,
    "password": form.password.value
  }
  const request = URL.prod || URL.dev

  Axios.post(`${request}api/signin`, data)
  .then(r => {
    console.log(r)
    localStorage.setItem('token', r.data.token)
    localStorage.setItem('rol', r.data.role)
    window.location = "/"
  })
  .catch(e => {
    alert("Error al iniciar sesión")
  })

}

const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Iniciar sesión</h1>
      <form onSubmit={authentication.bind()} >
        <div className="form__item">
          <label htmlFor="username">
            Nombre de usuario
            <input type="text" name="username" id="username" placeholder="Ingrese su nombre de usuario" required/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Contraseña
            <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" required/>
          </label>
        </div>
        <div className="form_item">
          <input type="submit" className="button full" value="Iniciar sesión"/>
        </div>
      </form>
    </div>
  </div>
)

export default Login
