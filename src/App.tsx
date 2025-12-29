import { Outlet } from 'react-router-dom'
import '@/assets/styles/_app.scss'

function App() {
  return (
    <div id="app">
      <Outlet />
    </div>
  )
}

export default App

