import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

const App = () => (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        NavBar
        <Route>
          <Route path="/" exact element={<Feed />} />
        </Route>
      </Box>
    </BrowserRouter>
  )


export default App