import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import { StrictMode } from 'react'
import Loader from './components/Loader'
import { Home } from './components/Home'

function App() {

  const [loading, setLoading] = useState(true)
  console.log('loading:', loading)
useLayoutEffect(()=>{

  setTimeout(() => {
    setLoading(false)
  }, 3000)
},[])

  return (
    <>
       {loading ? <Loader /> : <Home/>}
  
    </>
  )
}

export default App
