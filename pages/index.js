import Pagina from '@/components/Pagina'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Pagina titulo='Ola Mundo'>
    </Pagina>
  )
}
