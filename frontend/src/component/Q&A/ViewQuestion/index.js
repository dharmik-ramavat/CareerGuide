import React from 'react'
import '../Main/css/index.css'
import MainQuestion from './MainQuestion'
import Sidebar from '../Main/Sidebar'

function index() {
  return (
    <div className='stack-index'>
      <div className="stack-index-content">
        <MainQuestion/>
      </div>
    </div>
  )
}

export default index
