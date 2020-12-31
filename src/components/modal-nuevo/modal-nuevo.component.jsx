import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'

const ModalNewNote = ({closeModal, reloadData}) => {
  const [form , setForm] = useState({
    title : '',
    description : ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/notes', {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }),
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        reloadData()
        closeModal()
        alert('Saved successfully')
      } else {
        closeModal()
        alert('Somenthing was wrong')
      }
    })
  }

  const handleCloseModal = () => {
    closeModal()
  }

  const handleChange = (e) => {
    const {id , value} = e.target
    setForm(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 justify-center w-full">
                  <p className="text-lg leading-6 font-medium text-gray-900 w-full text-center" id="modal-headline">
                    Register new note
                  </p>
                  <div className="mt-2">
                    <div className="div">
                      <label className="text-sm w-full">Title</label>
                      <input
                        id="title"
                        type="text"
                        className="px-2 py-1 border w-full"
                        value={form.title}
                        onChange={e => handleChange(e)}
                      />
                    </div>
                    <div className="div">
                      <label className="text-sm w-full">Description</label>
                      <textarea
                        id="description"
                        rows="5" 
                        className="px-2 py-1 border w-full"
                        value={form.description}
                        onChange={e => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                <FontAwesomeIcon icon={faSave} />
                <span className="ml-2">Save</span>
              </button>
              <button type="button" onClick={handleCloseModal} className="mt-3 w-full inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                <FontAwesomeIcon icon={faTimes} />
                <span className="ml-2">Cancel</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalNewNote