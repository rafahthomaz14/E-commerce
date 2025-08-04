import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";

export default function App() {
  const [filtro, setFiltro] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(""); // Novo estado para categoria

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        filtro={filtro}
        setFiltro={setFiltro}
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}
      />
      <main className="flex-grow">
        <div className="w-full">
          <img src="./banner.png" className="w-full object-contain" alt="Banner" />
        </div>
        <Produtos filtro={filtro} categoriaSelecionada={categoriaSelecionada} />
      </main>
      <Footer />
    </div>
  );
}
