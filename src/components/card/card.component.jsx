import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Card = ({note}) => {
  return (
    <div className="border border-blue-400 rounded-lg hover:shadow-md hover:bg-purple-100 hover:bg-opacity-25">
      <h3 className="text-center uppercase text-md font-semibold text-blue-600 my-4">{ note.title }</h3>
      <hr/>
      <div className=" w-full text-justify text-sm p-4 app-content">
        <p>{ note.description }</p>
      </div>
      <hr/>
      <div className="p-2 items-center flex flex-row-reverse">
        <button className="bg-white text-blue-600 border border-blue-600 m-1 py-1 px-2 text-xs rounded-full h-6 w-6 flex items-center justify-center hover:bg-blue-600 hover:text-white" title="Editar">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="bg-white text-red-500 border border-red-500 m-1 py-1 px-2 text-xs rounded-full h-6 w-6 flex items-center justify-center hover:bg-red-500 hover:text-white" title="Borrar">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  )
}

export default Card
