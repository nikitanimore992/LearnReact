import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Search from "./Search";
import Display from "./Display";


const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="display" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default Navbar;