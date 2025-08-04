export default function Produtos({ filtro }) {
  const produtos = [
    {
      nome: "Fritadeira Sem Óleo Air Fryer 4l Mondial 1500W AFN-40-BFT",
      preco: "R$ 252,52",
      img: "./img.png",
      link:
        "https://www.mercadolivre.com.br/fritadeira-sem-oleo-air-fryer-4l-mondial-1500w-afn-40-bft/p/MLB23999810#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=a9fb1006-06a2-4a48-8cc9-57102e5fa41a&tracking_id=292cb3d4-7a81-4d92-9d2e-42357a367d3f&c_id=/home/card-featured/element&c_uid=4d5c7c42-ea45-4fe2-b241-580d927dd19f"
    },
    {
      nome: "rafa",
      preco: "R$ 252,52",
      img: "./img.png",
      link:
        "https://www.mercadolivre.com.br/fritadeira-sem-oleo-air-fryer-4l-mondial-1500w-afn-40-bft/p/MLB23999810#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=a9fb1006-06a2-4a48-8cc9-57102e5fa41a&tracking_id=292cb3d4-7a81-4d92-9d2e-42357a367d3f&c_id=/home/card-featured/element&c_uid=4d5c7c42-ea45-4fe2-b241-580d927dd19f"
    },
  ]

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  )

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
              <h1 className="flex justify-end font-bold">6x R$42,09 sem juros</h1>
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
