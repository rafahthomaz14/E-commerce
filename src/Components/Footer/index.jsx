import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState("");
  const telefone = "16993696126"; // seu número sem + e espaços

  const enviarWhatsApp = () => {
    if (!email) {
      alert("Por favor, digite seu e-mail.");
      return;
    }
    const mensagem = `Olá! Quero receber novidades. Meu e-mail é: ${email}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#10182f] text-white">
      <div className="max-w-[1250px] mx-auto px-6 py-10">

        <div className="flex flex-col sm:flex-row justify-between items-center lg:mb-10 gap-6 sm:gap-0">
          <div className="flex items-center space-x-2 text-2xl font-semibold">
            {/* Se quiser pode colocar um logo SVG ou img */}
            <span>RM Eletrodoméstico</span>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4267b2] hover:bg-white hover:text-[#4267b2] transition p-2 rounded-full"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e1306c] hover:bg-white hover:text-[#e1306c] transition p-2 rounded-full"
            >
              <FaInstagram />
            </a>

            <a
              href={`https://wa.me/${telefone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-white hover:text-[#25D366] transition p-2 rounded-full"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#000000] hover:bg-white hover:text-[#000000] transition p-2 rounded-full"
            >
              <SiTiktok />
            </a>
          </div>
        </div>

        <nav className="hidden lg:grid lg:grid-cols-5 gap-6 mt-10" aria-label="Footer Links">
          <div>
            <h3 className="text-lg font-medium mb-2">Sobre a Loja</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li><a href="#" className="hover:underline hover:text-white">Contato</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Compra Segura</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Parceiros Mercado Livre</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Categorias</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li><a href="#" className="hover:underline hover:text-white">Cafeteiras e Batedeiras</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Fogões e Fornos</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Cafeteiras e Batedeiras</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Serviços</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li><a href="#" className="hover:underline hover:text-white">Garantia Estendida</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Entrega Rápida</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Frete Grátis</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Atendimento e Suporte</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li><a href="#" className="hover:underline hover:text-white">Atendimento WhatsApp</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Rastreamento de Pedido</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Mercado Livre</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Receba Novidades!</h3>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full mb-2 px-3 py-2 rounded border border-gray-400 bg-white text-black text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Digite seu e-mail para receber novidades"
            />
            <button
              onClick={enviarWhatsApp}
              className="w-full px-3 py-2 rounded bg-white text-indigo-600 font-semibold text-sm cursor-pointer hover:bg-indigo-100 transition"
            >
              Enviar
            </button>
          </div>
        </nav>
      </div>

      <div className="bg-[#2e2748] text-white/80 text-sm py-4 px-6">
        <div className="max-w-[1250px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© 2025 <a href="#" className="hover:underline">RM Eletrodoméstico</a></span>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Todos os direitos reservados.</a>
            <a href="#" className="hover:underline">Termos e Condições</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
