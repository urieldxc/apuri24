import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Home } from './pages/Home';
import { Box, CssBaseline } from '@mui/material';




function App() {
  return (
    <Box sx={{backgroundColor: "#252422"}}>
    <CssBaseline />
      <Home />
    </Box>
  )
}

export default App
