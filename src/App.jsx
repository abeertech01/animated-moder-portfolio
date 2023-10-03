import './App.scss'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route />
        </Route>
      </Routes>
    </>
  )
}

export default App
