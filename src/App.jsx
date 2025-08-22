import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterNavBar from "./components/FooterNavBar";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import RestaurentMenu from "./components/RestaurentMenu";

function App() {

  return (
    <Router>
      <header className="bg-[#FF9B00] px-6 py-3 shadow-md">
        <NavBar />
      </header>
      <main className="mx-5 lg:mx-10 mb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurentmenu/:restaurantsId" element={<RestaurentMenu />}></Route>
        </Routes>
        
      </main>
      <footer className="bg-[#FF9B00] px-6 py-3 shadow-md">
        <FooterNavBar />
      </footer>
    </Router>
  )
}

export default App
