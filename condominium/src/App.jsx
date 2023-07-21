import { useState } from 'react'
import Box from '@mui/material/Box'
import Sidebar from 'components/Sidebar'

function App() {

  return (
      <Box sx={{ display: 'flex' }}>
          <Sidebar/>
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

          </Box>

      </Box>
  )
}

export default App
