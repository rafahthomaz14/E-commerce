import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";

export default function App() {
  const [filtro, setFiltro] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Header filtro={filtro} setFiltro={setFiltro} />
      <main className="flex-grow">
        <div className="w-full">
          <img src="./banner.png" className="w-full object-contain" alt="Banner" />
        </div>
        <Produtos filtro={filtro} />
      </main>
      <Footer />
    </div>
  );
}
