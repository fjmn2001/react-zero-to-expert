import Navbar from "../ui/Navbar"
import { Route, Routes } from "react-router-dom"
import MarvelView from "../../../marvel/views/MarvelView"
import DcView from "../../../dc/views/DcView"
import SearchView from "../../../search/views/SearchView"
import HeroView from "../../../heroes/views/HeroView"

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className={"container"}>
        <Routes>
          <Route path="marvel" element={<MarvelView />} />
          <Route path="dc" element={<DcView />} />
          <Route path="heroes/:id" element={<HeroView />} />
          <Route path="search" element={<SearchView />} />
          <Route path="/" element={<MarvelView />} />
        </Routes>
      </div>
    </>
  )
}

export default DashboardRoutes
