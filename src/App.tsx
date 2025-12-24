import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import HelloFireworks from '@/components/HelloFireworks'
import '@/assets/styles/_app.scss'

function App() {
  const [showHello, setShowHello] = useState(true)

  useEffect(() => {
    // Remove the animation after it completes (4 seconds total: 2s formation + 1s hold + 1s fade)
    const timer = setTimeout(() => {
      setShowHello(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="app">
      {showHello && <HelloFireworks />}
      <Outlet />
    </div>
  )
}

export default App

