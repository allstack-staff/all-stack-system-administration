"use client"

import Layout from "@/app/components/layout/page"
import Dashboard from "@/app/dashboard/page"
import { Checkbox } from "@nextui-org/react"

export default function newMember(){
    return (
        <Layout>
            <h1 className="text-xl text-blue-600 font-bold text-center">Cadastro de novo membro</h1>
            <h2 className="text-red-600 font-bold text-sm">Atenção!</h2>
            <p className="text-sm mb-5">Prossiga com cuidado. Este formulário concederá acesso ao All Stack System Administration, o que fará com que o usuário cadastrado possa acessar informações internas dos projetos da equipe.</p>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_name" id="user_name" className="block py-2.5 px-0 w-full text-sm text-bold text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="user_name" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75">Nome preferencial</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="user_email" id="user_email" className="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="user_email" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75">E-mail</label>
            </div>
            <Checkbox.Group
                orientation="horizontal"
                defaultValue={["designer"]}
                size="sm"
                labelColor="primary"
                label="Pertence as seguintes squads:"
            >
                <Checkbox value="designer">Designer</Checkbox>
                <Checkbox value="frontend">Front End</Checkbox>
                <Checkbox value="backend">Back End</Checkbox>
                <Checkbox value="qa">Quality Assurance</Checkbox>
                <Checkbox value="Sysadmin">SysAdmin</Checkbox>
            </Checkbox.Group>
            <div className="relative z-0 w-full mb-6 group mt-5">
                <input type="text" name="responsible_recruiter" id="responsible_recruiter" className="block py-2.5 px-0 w-full text-sm text-bold text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-black dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="responsible_recruiter" className="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75">Recrutador responsável</label>
            </div>

            <div className="w-full flex justify-center">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
            </div>

        </Layout>
    )
}