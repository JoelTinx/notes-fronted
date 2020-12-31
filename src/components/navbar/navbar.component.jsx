import { Link }     from "react-router-dom"
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('username')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])
  return (
    <div className="bg-blue-700 text-white flex">
      <Link to="/" className="px-4 py-3 hover:bg-blue-900 text-sm font-thin">HOME</Link>
      {
        !isLogged 
        ?
        <Link to="/login" className="px-4 py-3 hover:bg-blue-900 text-sm font-thin">LOGIN</Link>
        :
        <Link to="/dashboard" className="px-4 py-3 hover:bg-blue-900 text-sm font-thin">DASHBOARD</Link>
      }
  </div>
  )
}

export default Navbar