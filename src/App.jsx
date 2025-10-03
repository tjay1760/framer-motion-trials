import { useState } from 'react'

import './App.css'
import SpringBox from './SpringBox'
import BasicsOfMotion from './BasicsOfMotion'
import Guestures from './Guestures'
import AnimationControls from './AnimationControls'
import ViewBasedTransitions from './ViewBasedTrasitions'
import ScrollAnimations from './ScrollAnimations'

function App() {
  

  return (
    <div className='flex items-center justify-center'>
      {/* <SpringBox /> */}
      {/* <BasicsOfMotion /> */}
      {/* <Guestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedTransitions /> */}
      <ScrollAnimations />
    </div>
  )
}


export default App
