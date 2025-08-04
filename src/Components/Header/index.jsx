import { FaBars } from "react-icons/fa"
import { useState } from "react"
export default function Header({ filtro, setFiltro }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const categorias = ["Geladeiras", "Fogões", "Máquinas de Lavar", "Micro-ondas", "Acessórios"];

  return (
    <div className="bg-[#2e2748] w-full h-20 font-bold text-white flex items-center justify-between px-4 lg:px-8 overflow-hidden">
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      <div className="flex gap-6 justify-center items-center w-full">
        <h1 className="text-[15px] lg:text-2xl">RM Eletrodoméstico</h1>
        <input
          type="text"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="bg-white p-2 text-sm text-black placeholder-gray-700 rounded focus:outline-none w-[250px] sm:w-[350px] md:w-[450px]"
          placeholder="Olá, o que você procura?"
        />
      </div>


      {menuOpen && (
        <div className="absolute top-20 left-0 w-64 h-screen bg-[#3b3360] shadow-lg z-50 p-4 flex flex-col gap-4">
          <h2 className="text-xl mb-2">Categorias</h2>
          {categorias.map((cat, idx) => (
            <a key={idx} href="#" className="hover:underline">
              {cat}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
