import { FaBars } from "react-icons/fa"
import { useState } from "react"

export default function Header({ filtro, setFiltro, categoriaSelecionada, setCategoriaSelecionada }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const categorias = ["Cabelo","Sanduicheiras","Ventiladores","Fogão","Cafeteiras","Liquidificadores","Fritadeiras"]

  return (
    <div className="bg-[#2e2748] w-full h-20 font-bold text-white flex items-center justify-between px-4 lg:px-8 overflow-hidden">
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      <div className="flex gap-4 justify-center items-center w-full">
        <h1 className="text-[15px] lg:text-2xl whitespace-nowrap">RM Eletrodoméstico</h1>

        <input
          type="text"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="bg-white p-2 text-sm text-black placeholder-gray-700 rounded focus:outline-none w-[250px] sm:w-[350px] md:w-[450px]"
          placeholder="Olá, o que você procura?"
        />

        {/* Select visível só em desktop */}
        <select
          className="hidden lg:block bg-white text-gray-700 p-2 rounded focus:outline-none cursor-pointer"
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          aria-label="Selecionar categoria"
        >
          <option value="">Todas as categorias</option>
          {categorias.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-64 h-screen bg-[#3b3360] shadow-lg z-50 p-4 flex flex-col gap-4">
          <h2 className="text-xl mb-2">Categorias</h2>

          {/* Select visível só em mobile */}
          <select
            className="block lg:hidden bg-white text-gray-700 p-2 rounded focus:outline-none cursor-pointer"
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
            aria-label="Selecionar categoria"
          >
            <option value="">Todas as categorias</option>
            {categorias.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}
