import { Outlet } from 'react-router'
import { Container } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Container
        maxWidth={ 'xl' }
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 16 },
        }}
      >
        <Outlet />
      </Container>
    </>
  )
}

export default App
