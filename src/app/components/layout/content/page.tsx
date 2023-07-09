export default function Content({children = <h1>Default</h1>}){
    return (
        <main className="w-full h-full pl-64 pt-5">
            <div className="mx-5 p-3 border-2 border-blue-200 border-dashed rounded-lg dark:border-blue-700">
                {children}
            </div>
        </main>
    )
}
