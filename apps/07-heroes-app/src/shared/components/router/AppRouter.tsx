import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginView from "../../../auth/views/LoginView"
import MarvelView from "../../../marvel/views/MarvelView"
import DcView from "../../../dc/views/DcView"
import SearchView from "../../../search/views/SearchView"
import Navbar from "../ui/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <MarvelView /> } />
        <Route path="/marvel" element={ <MarvelView /> } />
        <Route path="/dc" element={ <DcView /> } />
        <Route path="/search" element={ <SearchView /> } />
        <Route path="/login" element={ <LoginView /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
