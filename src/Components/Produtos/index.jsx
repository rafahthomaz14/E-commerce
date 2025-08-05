export default function Produtos({ filtro, categoriaSelecionada }) {
  const produtos = [
    {
      nome: "Fritadeira Sem Óleo Air Fryer 4l Mondial 1500W",
      preco: "R$ 252,52",
      condicao: "6x R$42,09 sem juros",
      img: "./img.png",
      categoria: "Fritadeiras",
      link: "#"
    },
    {
      nome: "Liquidificador Turbo Power Mondial 550W L-99 FR  ",
      preco: "R$ 196,57",
      condicao: "6x R$32,76 sem juros",
      img: "./img2.png",
      categoria: "Liquidificadores",
      link: "#",
    },
    {
      nome: "Sanduicheira Brunch Time 2 Em 1 Elgin Antiaderente Preta",
      preco: "R$ 60,88",
      condicao: "8x R$9,75 sem juros",
      img: "./img3.png",
      categoria: "Sanduicheiras",
      link: "#",
    },
    {
      nome: "Liquidificador Philco PH900 3 Litros Com 12 Velocidades e Pulsar Potência de 1200W Cor Preto",
      preco: "R$ 132,05",
      condicao: "4x R$33,01 sem juros",
      img: "./img4.png",
      categoria: "Liquidificadores",
      link: "#",
    },
    {
      nome: "Cafeteira portátil Nescafé Dolce Gusto Arno Mini Me automática vermelha e preta para cápsulas monodose",
      preco: "R$ 449,90",
      condicao: "18x R$72,02 sem juros",
      img: "./img5.png",
      categoria: "Cafeteiras",
      link: "#"
    },
    {
      nome: "Ventilador de Mesa Elgin Breeze Air Preto 40cm 7 Pá Preto 127V",
      preco: "R$ 109,90",
      condicao: "18x R$17,59 sem juros",
      img: "./img8.png",
      categoria: "Ventiladores",
      link: "#"
    },

    {
      nome: "Fogão 4 Bocas Preto com Mesa Inox Atlas Mônaco Plus 50Litros",
      preco: "R$ 688,90",
      condicao: "12x R$57,41 sem juros",
      img: "./img7.png",
      categoria: "Fogão",
      link: "#"
    },

    {
      nome: "Maquina De Cortar Cabelo Kamufla Barbeador Eletrico Acabamento Dragão Com 6 Pentes Recarregável Sem Fio",
      preco: "R$ 21,11",
      condicao: "1x R$21,11 sem juros",
      img: "./img10.png",
      categoria: "Cabelo",
      link: "https://www.mercadolivre.com.br/maquina-de-cortar-cabelo-kamufla-barbeador-eletrico-acabamento-drago-com-6-pentes-recarregavel-sem-fio/p/MLB38098064#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=01b0d77a-08bb-49b9-bd81-b2a596a11e83&tracking_id=aa0f7651-5e5f-4c4a-8b91-6099ea238ad0&c_id=/home/card-featured/element&c_uid=513a3809-1348-49ae-9754-484b006a5941"
    },

    {
      nome: "Sanduicheira Elétrica Cadence SAN400 Potência de 750W Preto",
      preco: "R$ 123,00",
      condicao: "18x R$19,69 sem juros",
      img: "./img9.png",
      categoria: "Sanduicheiras",
      link: "#"
    },
    {
      nome: "Fogão Cooktop Elétrico Elgin 2 Bocas 2000w Preto",
      preco: "R$ 103,90",
      condicao: "18x R$16,63 sem juros",
      img: "./img6.png",
      categoria: "Fogão",
      link: "#"
    },
      {
      nome: "Creme De Tratamento Milagroso Longo Dos Sonhos 300g Elseve",
      preco: "R$ 22,04",
      condicao: "1x R$22,04 sem juros",
      img: "./img11.png",
      categoria: "Cabelo",
      link: "https://www.mercadolivre.com.br/creme-de-tratamento-milagroso-longo-dos-sonhos-300g-elseve/p/MLB39456229#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=7085b2d1-4df2-41f3-a23e-6727b26c2358&tracking_id=18dbdd6c-f84a-445e-8064-ec90751f4a28&c_id=/home/card-featured/element&c_uid=c18beb20-4e36-4d9f-9384-de4ecdd7c553"
    },
  ]

  const produtosFiltrados = produtos.filter((p) => {
    const filtroNome = p.nome.toLowerCase().includes(filtro.toLowerCase())
    const filtroCategoria = categoriaSelecionada ? p.categoria === categoriaSelecionada : true
    return filtroNome && filtroCategoria
  })

  return (
    <div className="p-5 gap-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {produtosFiltrados.map((produto, idx) => (
        <div key={idx} className="p-2 rounded-2xl">
          <div className="bg-white rounded-t-2xl rounded-b-none h-70 flex items-center justify-center">
            <img src={produto.img} className="h-70" alt={produto.nome} />
          </div>
          <div className="py-2 text-[18px]">
            <p>{produto.nome}</p>
            <h1 className="flex justify-end font-bold text-[25px]">{produto.preco}</h1>
            <div className="flex justify-between">
              <div className="bg-blue-500 px-2 text-white font-bold">Frete Grátis</div>
              <h1 className="flex justify-end font-bold">{produto.condicao}</h1>
            </div>
          </div>
          <a href={produto.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-[18px] p-2 w-full rounded text-white font-bold hover:bg-green-600 transition duration-200 ease-in-out">
              Comprar pelo Mercado Livre
            </button>
          </a>
        </div>
      ))}
    </div>
  )
}
