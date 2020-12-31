import { useState } from 'react'

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const [form , setForm] = useState({
    username : '',
    password : ''
  })

  const handleChange = (e) => {
    const {id , value} = e.target
    setForm(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/login', {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      localStorage.setItem('id', data.user.id)
      localStorage.setItem('username', data.user.username)

      window.location.href = '/dashboard'
    })
  }

  return (
    <div className="flex mt-10 items-center justify-center">
      <div className="flex w-80 rounded-lg border border-gray-400 p-5 hover:shadow-md">
        <form className="w-full" onSubmit={handleSubmit}>
          <div>
            <p className="text-center font-bold">LOGIN</p>
          </div>
          <div>
            <label className="text-xs" htmlFor="username">Username</label>
            <input
              id="username" 
              type="text" 
              name="username" 
              className="w-full py-2 px-3 border border-gray-400 rounded-full text-xs justify-self-center" 
              placeholder="USERNAME"
              value={form.username}
              onChange={e => handleChange(e)}
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-xs" htmlFor="password">Password</label>
            <input
              id="password" 
              type="password" 
              name="password" 
              className="w-full py-2 px-3 border border-gray-400 rounded-full text-xs" 
              placeholder="PASSWORD"
              value={form.password}
              onChange={e => handleChange(e)}
              required 
            />
          </div>
          <div className="mt-2">
            <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white rounded-full text-sm py-2 px-3 mt-2 w-full">
              <FontAwesomeIcon icon={faCheck} />
              <span className="ml-2">Login</span>
            </button>
            <button className="bg-gray-600 hover:bg-gray-800 text-white rounded-full text-sm py-2 px-3 mt-2 w-full">
              <FontAwesomeIcon icon={faTimes} />
              <span className="ml-2">Cancel</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login