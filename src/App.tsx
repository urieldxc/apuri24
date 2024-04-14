import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { router } from "./Router";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(221, 161, 94)',
    },
    secondary: {
      main: '#70a064',
    },
    custom: {
      buttonScore: '#dc675e',
      buttonYear: '#70a064',
    },
    background: {
      default: '#252422',
      paper: '#56565b',
    },
    text: {
      primary: '#fefae0',
    },
    divider: 'rgba(255, 255, 255, 0.20)',
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#252422",
        },
      },
    },
  },
});

function App() {
  return (
    // TODO: solucionar navbar y poder aislarlo
    <Box >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <RouterProvider router={router}>
          <Routes />
        </RouterProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
