
export default function Header() {
    return (
        <div className="bg-[#2e2748] w-full h-20 text-[19px] lg:text-2xl font-bold text-white flex justify-center items-center overflow-hidden">
            <div className="flex gap-4">
                <div>
                    <h1>RM Eletrodoméstico</h1>
                </div>
                <input
                    type="text"
                    className=" bg-white p-2 placeholder: text-sm text-black placeholder-gray-700 rounded focus:outline-none sm:w-80"
                    placeholder="Olá, o que você procura?"
                />

            </div>
        </div>

    )
}