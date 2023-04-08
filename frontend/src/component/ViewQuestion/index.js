import React from 'react'
import '../StackOverFlow/css/index.css'
import MainQuestion from './MainQuestion'
import Sidebar from '../StackOverFlow/Sidebar'

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
