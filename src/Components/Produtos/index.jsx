export default function Produtos({ filtro, categoriaSelecionada }) {
  const produtos = [
    {
      nome: "Fritadeira Sem Óleo Air Fryer 4l Mondial 1500W",
      preco: "R$ 252,52",
      condicao: "6x R$42,09 sem juros",
      img: "./img.png",
      categoria: "Fritadeiras",
      link: "https://www.mercadolivre.com.br/fritadeira-sem-oleo-air-fryer-4l-mondial-1500w-afn-40-bft/p/MLB23999810#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=fa8108cc-909c-4ce2-a6fb-34832a2c1493&tracking_id=503bb421-b6a7-4b86-98eb-3c0cdff7672f&c_id=/home/card-featured/element&c_uid=675d2df9-a11b-4833-8c17-d905194a7ddf"
    },
    {
      nome: "Liquidificador Turbo Power Mondial 550W L-99 FR  ",
      preco: "R$ 196,57",
      condicao: "6x R$32,76 sem juros",
      img: "./img2.png",
      categoria: "Liquidificadores",
      link: "https://www.mercadolivre.com.br/liquidificador-turbo-power-mondial-550w-l-99-rw/p/MLB15699904#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=43de61e0-83e4-4714-93e8-1606a0162c80&tracking_id=32486586-c800-451c-9264-2fa2dae952e9&c_id=/home/card-featured/element&c_uid=22d6e7f5-9d7e-49c9-a50f-6768a3bfa66a"
    },
    {
      nome: "Sanduicheira Brunch Time 2 Em 1 Elgin Antiaderente Preta",
      preco: "R$ 60,88",
      condicao: "8x R$9,75 com Linha de Crédito",
      img: "./img3.png",
      categoria: "Sanduicheiras",
      link: "https://www.mercadolivre.com.br/sanduicheira-brunch-time-2-em-1-elgin-antiaderente-preta/p/MLB40003885#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=3d5bd3d4-f1b2-4304-ae0d-521ea3222661&tracking_id=e85b66e5-58bc-4b8c-aa37-b534fef65ce0&c_id=/home/card-featured/element&c_uid=60bbdea2-f80c-476c-9b23-cdcd4066a320"
    },
    {
      nome: "Liquidificador Philco PH900 3 Litros Com 12 Velocidades e Pulsar Potência de 1200W Cor Preto",
      preco: "R$ 132,05",
      condicao: "4x R$33,01 sem juros",
      img: "./img4.png",
      categoria: "Liquidificadores",
      link: "https://www.mercadolivre.com.br/liquidificador-philco-ph900-3-litros-com-12-velocidades-e-pulsar-potncia-de-1200w-cor-preto/p/MLB15578942#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=19700b9d-a927-4c26-9965-ce3e0b447bee&tracking_id=67ae29a6-2cef-4715-8c3b-20eb014ee5de&c_id=/home/card-featured/element&c_uid=1378f928-08a9-4b21-bc9b-3529f53c6ead"
    },
    {
      nome: "Cafeteira portátil Nescafé Dolce Gusto Arno Mini Me automática vermelha e preta para cápsulas monodose",
      preco: "R$ 449,90",
      condicao: "18x R$72,02 com Linha de Crédito",
      img: "./img5.png",
      categoria: "Cafeteiras",
      link: "https://www.mercadolivre.com.br/cafeteira-portatil-nescafe-dolce-gusto-arno-mini-me-automatica-vermelha-e-preta-para-capsulas-monodose/p/MLB15154784#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=47c3182a-3b5d-4e44-8705-79bef3a1e2c1&tracking_id=7ae046b6-1c16-404c-8c04-8ca2dfcb05ff&wid=MLB3285358470&sid=recos&c_id=/home/card-featured/element&c_uid=58be08e9-90c0-4fd9-ad06-4a9733baf27b"
    },
    {
      nome: "Ventilador de Mesa Elgin Breeze Air Preto 40cm 7 Pá Preto 127V",
      preco: "R$ 109,90",
      condicao: "18x R$17,59 com Linha de Crédito",
      img: "./img8.png",
      categoria: "Ventiladores",
      link: "https://www.mercadolivre.com.br/ventilador-de-mesa-elgin-breeze-air-preto-40cm-7-pas/p/MLB43068578#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=6fd3d178-9748-4668-8c92-c18a8a534edb&tracking_id=d713805b-1933-4d99-9518-471c32054363&c_id=/home/card-featured/element&c_uid=769df9e2-7c8a-477d-bbb3-3b9c24c25e03"
    },

    {
      nome: "Fogão 4 Bocas Preto com Mesa Inox Atlas Mônaco Plus 50Litros",
      preco: "R$ 688,90",
      condicao: "12x R$57,41 sem juros",
      img: "./img7.png",
      categoria: "Fogão",
      link: "https://www.mercadolivre.com.br/fogo-4-bocas-preto-com-mesa-inox-atlas-mnaco-plus-50litros/p/MLB18125285#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=b33dc7bd-1aec-47c7-be06-d9c44ee78730&tracking_id=b46c9300-7e7c-41f4-aa68-ac0338c95549&c_id=/home/card-featured/element&c_uid=9d5611fb-a69b-4837-832e-1365de0db055"
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
      condicao: "18x R$19,69 com Linha de Crédito",
      img: "./img9.png",
      categoria: "Sanduicheiras",
      link: "https://www.mercadolivre.com.br/sanduicheira-eletrica-cadence-san400-potncia-de-750w-preto/p/MLB25741527#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=0e848205-ce17-4a03-8051-366ccc78b7ba&tracking_id=d286a061-e7e0-490f-8ddd-221de89d93eb&c_id=/home/card-featured/element&c_uid=22252d72-f08a-4c03-91c4-9ef7314367a8"
    },
    {
      nome: "Fogão Cooktop Elétrico Elgin 2 Bocas 2000w Preto",
      preco: "R$ 103,90",
      condicao: "18x R$16,63 com Linha de Crédito",
      img: "./img6.png",
      categoria: "Fogão",
      link: "https://www.mercadolivre.com.br/fogo-cooktop-eletrico-elgin-2-bocas-2000w-preto/p/MLB24197945#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=dd133973-de8a-4e16-bc62-31de2a691f02&tracking_id=12e96ac1-af58-4c95-be2f-c2509779a5ba&c_id=/home/card-featured/element&c_uid=3b7aaf76-72d1-482a-ac3b-69f371302466"
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
