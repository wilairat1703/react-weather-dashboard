import { RouterProvider } from 'react-router-dom'
import './App.css'
import mainRouter from './Router/MainRouter'
// import DashboardLayoutBasic from './pages/DashboardLayoutBasic'

function App() {

  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  )
}

export default App
