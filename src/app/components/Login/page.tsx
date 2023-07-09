import Image from "next/image"

export default function Login({ needLogo = false}){
    return (
        <div className="h-full w-full">
            <div className="h-full w-full pt-28 pb-6">
                {needLogo ? (
                    <div className="h-full w-full">
                        <div className="w-full flex flex-col items-center animate-float">
                            <Image className="h-15 mr-3 animate-float" src="/logo.png" alt="Logo da All Stack" height={250} width={250} />
                        </div>
                        <form className="w-full flex justify-center">
                        <div className="w-96 h-80 flex flex-col justify-center">
                            <div className="flex justify-evenly md:flex md:items-center mb-6">
                                <div>
                                    <label htmlFor="email" className="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4">E-mail</label>
                                </div>
                                <div>
                                    <input type="password" id="password" className="bg-blue-200 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Digite seu e-mail" />
                                </div>
                            </div>
                            <div className="justify-evenly md:flex md:items-center mb-6">
                                <div>
                                    <label htmlFor="password" className="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Senha</label>
                                </div>
                                <div>
                                    <input type="password" className="bg-blue-200 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="password" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6 flex justify-end mr-6">
                                <a href="#" className="text-sm text-blue-500 font-bold hover:text-blue-400">Esqueceu a senha</a>
                            </div>
                            <div className="flex justify-center md:w-full">
                                <button className="w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">Entrar</button>
                            </div>
                        </div>
                </form>
                    </div>
                ) : 
                <form className="w-full flex justify-center">
                <div className="w-96 h-80 flex flex-col justify-center">
                    <div className="flex justify-evenly md:flex md:items-center mb-6">
                        <div>
                            <label htmlFor="email" className="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4">E-mail</label>
                        </div>
                        <div>
                            <input type="password" id="password" className="bg-blue-200 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Digite seu e-mail" />
                        </div>
                    </div>
                    <div className="justify-evenly md:flex md:items-center mb-6">
                        <div>
                            <label htmlFor="password" className="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Senha</label>
                        </div>
                        <div>
                            <input type="password" className="bg-blue-200 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="password" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6 flex justify-end mr-6">
                        <a href="#" className="text-sm text-blue-500 font-bold hover:text-blue-400">Esqueceu a senha</a>
                    </div>
                    <div className="flex justify-center md:w-full">
                        <button className="w-80 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">Entrar</button>
                    </div>
                    </div>
            </form>}
            </div>
        </div>
    )
}