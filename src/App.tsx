import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/plus.icons'
import { ShareIcon } from './icons/share.icons'

function App() {
  

  return (
    <>
      <div className='m-40'>
        <Button variant='primary' size='sm' text='Add Content' onClick={()=>{}} startIcon={<PlusIcon size="md" />} />
        <Button variant='secondary' size='md' text='Share Brain' onClick={()=>{}} startIcon={<ShareIcon size="md" />} />
        <Button variant='secondary' size='lg' text='Press Me' onClick={()=>{}}  />
      </div>
    </>
  )
}

export default App
