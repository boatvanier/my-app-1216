import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';


function App({name}) {


  return (
      <>
    <h1>hello, {name}</h1>
    <p>this is a react project</p>
    <Button variant="contained">Click</Button>
    </>
  )
}

export default App
