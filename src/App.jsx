import { useState } from 'react'

import './App.css'
import SpringBox from './SpringBox'
import BasicsOfMotion from './BasicsOfMotion'
import Guestures from './Guestures'
import AnimationControls from './AnimationControls'

function App() {
  

  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <SpringBox /> */}
      {/* <BasicsOfMotion /> */}
      {/* <Guestures /> */}
      <AnimationControls />
    </div>
  )
}


export default App
