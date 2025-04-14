import { Container } from '@mui/material'
import { Outlet } from 'react-router'
import './App.css'

import Footer from './components/Home/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

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

      <Footer />
    </>
  )
}

export default App
