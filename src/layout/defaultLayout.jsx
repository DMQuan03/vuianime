import React from 'react'
import HEADERLAYOUT from './header'

const DEFAULTLAYOUT = ({children}) => {
  return (
    <div >
        <HEADERLAYOUT />
        <div>
            {children}
        </div>
    </div>
  )
}

export default DEFAULTLAYOUT