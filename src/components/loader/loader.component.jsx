import { Fragment } from 'react'
import './loader.styles.css'

const Loader = ({message}) => {
  return (
    <Fragment>
      <div className="loader">
      </div>
      <p className="w-full text-center text-blue-400">{message}</p>
    </Fragment>
  )
}

export default Loader