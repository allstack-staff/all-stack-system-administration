export default function Footer({ title = "All Stack System Administration @ 2023 - Todos os direitos reservados." }) {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex justify-center">
                <p>{title}</p>
            </div>
        </footer>
    )
}