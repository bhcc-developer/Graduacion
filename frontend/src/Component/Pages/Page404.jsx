import React from 'react'

const Page404 = () => {

  const removeToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('rol')  
    window.location = "/login"
  }

  return(
  <div className="ed-grid">
    <h1>404 Not found</h1>
    <span onClick={() => removeToken()}>Regresar</span>
  </div>
  )
}

export default Page404
