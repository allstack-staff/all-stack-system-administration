import Image from "next/image";

export default function Layout({ needLogin = false, title = "Default Title" }) {
    return (
        <header className="h-28 max-h-28 flex">
                    <div className="fixed top-0 z-50 w-full bg-white border-b border-blue-200 dark:bg-blue-800 dark:border-blue-700 shadow-md">
                        <div className="px-3 py-3 lg:px-5 lg:pl-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-start">
                                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-blue-500 rounded-lg sm:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600">
                                        <span className="sr-only">Open sidebar</span>
                                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                        </svg>
                                    </button>
                                    <a href="/" className="flex ml-2 md:mr-24">
                                    <Image className="h-15 mr-3 animate-float" src="/logo.png" alt="Logo da All Stack" height={80} width={80} />
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">All Stack</span>
                                    </a>
                                </div>
                                <div className="absolute w-full flex justify-center">
                                    <h1 className="text-white">{title}</h1>
                                </div>
                                {needLogin ? (
                                    <div className="flex items-center">
                                        <div className="flex items-center ml-3">
                                            <Image className="w-8 h-8 rounded-full" height={100} width={100} src={"/user.png"} alt={"User Photo"}></Image>
                                        </div>
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-blue-900 dark:text-white" role="none">
                                                Nicollas Prudencio
                                            </p>
                                            <p className="text-sm font-medium text-blue-900 truncate dark:text-blue-300" role="none">
                                            Desenvolvedor Full Stack
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-white">
                                        <p></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
        </header>
    );
}