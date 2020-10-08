import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({ component: Component, rolUser, isRol, ...rest }) => {

  const userLogged = localStorage.getItem('token')
  const rolUserLogged = localStorage.getItem('rol')



  if ( !userLogged ) {
    return <Redirect to="/login" />
  }

  if (rolUserLogged === rolUser ) {
    return <Route {...rest} component={Component} />  
  }
  
  if (isRol) {
    return <Route {...rest} component={Component} />  
  }
    
  return <Redirect to="/segurity" />
  
}

export default Protected
