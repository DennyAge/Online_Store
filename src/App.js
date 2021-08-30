import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar"
import Admin from "./pages/Admin"
import Shop from "./pages/Shop"

const App = () => {
  return(
    <BrowserRouter>
      <NavBar />
      <AppRouter /> 
      <Admin/>
    </BrowserRouter>
  )
}
export default App
 