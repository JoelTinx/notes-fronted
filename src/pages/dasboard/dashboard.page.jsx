import { useState, useEffect, Fragment } from 'react'

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faPlus }           from '@fortawesome/free-solid-svg-icons'

import Card                 from '../../components/card/card.component'
import Loader               from '../../components/loader/loader.component'
import ModalNewNote         from '../../components/modal-nuevo/modal-nuevo.component'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModalNuevo, setShowModalNuevo] = useState(false)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    handleIsLoading(true)
    fetch('http://localhost:5000/api/notes', {
      method: 'get',
      headers: new Headers({
        'Authorization': localStorage.getItem('token')
      })
    })
    .then(res => res.json())
    .then(data => {
      setNotes(data)
      handleIsLoading(false)
    })
  }, [])

  const handleIsLoading = (val) => {
    setIsLoading(val)
  }

  const handleModal = (val) => {
    setShowModalNuevo(val)
  }

  const handleCloseModal = () => {
    setShowModalNuevo(false)
  }

  const reloadData = () => {
    handleIsLoading(true)
    fetch('http://127.0.0.1:5000/api/notes', {
      method: 'get',
      headers: new Headers({
        'Authorization': localStorage.getItem('token')
      })
    })
    .then(res => res.json())
    .then(data => {
      setNotes(data)
      handleIsLoading(false)
    })
  }

  return (
    <Fragment>
      <div className="px-4 pt-1 flex justify-end">
        <button className="bg-white text-blue-600 border border-blue-600 m-1 py-1 px-2 text-xs rounded-full h-6 w-6 flex items-center justify-center hover:bg-blue-600 hover:text-white" title="Nuevo" onClick={e => handleModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {
        isLoading ?
          <Loader message="LOADING" />
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {
              notes.map(note => (
                <Card key={note.id} note={note} />
              ))
            }
          </div>
      }
      {
        showModalNuevo && <ModalNewNote closeModal={handleCloseModal} reloadData={reloadData} />
      }
    </Fragment>
  )
}

export default Dashboard