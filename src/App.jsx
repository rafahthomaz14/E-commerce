// App.jsx ou App.js
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Produtos from "./Components/Produtos"
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="w-full">
          <img src="./banner.png" className="w-full object-contain" alt="Banner" />
        </div>
        <Produtos />
      </main>
      <Footer />
    </div>
  )
}


