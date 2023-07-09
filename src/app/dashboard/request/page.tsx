"use client"

import Layout from "@/app/components/layout/page";
import { Dropdown } from "@nextui-org/react";

export default function Request(){
    return (
        <Layout login titleHeader=" ">
            <div>
                <div className="text-center">
                    {/* Componente do Titulo */}
                    <h1 className="font-bold text-xl text-blue-600">Requisição</h1>
                </div>
                <div>
                    <p className="mt-5 text-center text-cyan-600 mb-5">Este formulário serve para você submeter a outra squad e registrar a demanda que necessita da squad</p>
                    {/* Componente do Conteudo do formulario */}
                    <form>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_name" id="user_name" className="block py-2.5 px-0 w-full text-sm text-bold text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value="Nicollas Prudencio" required readOnly />
                                <label htmlFor="user_name" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75">Nome</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_squad" id="squad_name" className="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value="Back End" required readOnly />
                                <label htmlFor="squad_name" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75">Sua Squad</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="email" className="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={"nicollas_prudencio@allstack.com.br"} required  readOnly/>
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
                        </div>
                        {/* DropDown - Squad de Destino */}
                        
                        {/* ------------------------- */}
                        <div className="relative z-0 w-full mb-6 group mt-5">
                            <input type="text" name="repeat_password" id="description" className="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrição</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="time_limit" id="time_limit" className="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="time_limit" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prazo</label>
                            </div>

                            <div className="flex z-0 w-full mb-6 group">
                            <div className="p-3">
                                <Dropdown>
                                    <Dropdown.Button flat>Squad de Destino</Dropdown.Button>
                                    <Dropdown.Menu aria-label="Static Actions">
                                        <Dropdown.Item key="design">Design</Dropdown.Item>
                                        <Dropdown.Item key="frontend">Front End</Dropdown.Item>
                                        <Dropdown.Item key="backend">Back End</Dropdown.Item>
                                        <Dropdown.Item key="qa">Quality Assurance(QA)</Dropdown.Item>
                                        <Dropdown.Item key="nao-se-aplica" color="error">
                                        Não se aplica
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="p-3">
                                <Dropdown>
                                    <Dropdown.Button flat>Prioridade</Dropdown.Button>
                                    <Dropdown.Menu aria-label="Static Actions">
                                    <Dropdown.Item key="0" color="error">
                                        0 - Alto
                                    </Dropdown.Item>
                                    <Dropdown.Item key="1">1 - Médio</Dropdown.Item>
                                    <Dropdown.Item key="2">2 - Baixo</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            
                        </div>

                        </div>
                    </form>
                </div>
                <div className="w-full flex justify-center">
                    {/* Componente do botão para submeter */}
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </div>
            </div>
        </Layout>
    )
}