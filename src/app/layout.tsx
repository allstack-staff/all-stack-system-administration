import './globals.css'
import { Roboto_Serif } from 'next/font/google'

const roboto = Roboto_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'All Stack System Administration',
  description: 'O All Stack System Adminitration (ASSA) é uma aplicação de suporte a equipe de desenvolvimento do Projeto All Stack (PAS). Ela integra e automatiza as tarefas e demandas entre as squads da equipe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
