import './globals.css'
import {Inter} from 'next/font/google'
import {ProductFilterProvider} from "/app/components/ProductFilter/FilterContext";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'GTG,
    description: 'Creado por Ibai Farina, con los términos de Hector Berger',
}

export default function RootLayout({children}) {
    return (
        <html lang="es">
        <body className={inter.className}>
        <ProductFilterProvider>
            {children}
        </ProductFilterProvider>
        </body>
        </html>
    )
}
