import FooterNavBar from "./components/FooterNavBar";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <header className="bg-[#E63946] px-6 py-3 shadow-md">
        <NavBar/>
      </header>
      <main className="mx-10">
        <Home/>
      </main>
      <footer className="bg-[#E63946] px-6 py-3 shadow-md">
        <FooterNavBar/>
      </footer>
    </>
  )
}

export default App
