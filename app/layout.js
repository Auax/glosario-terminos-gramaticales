import './globals.css'
import {Inter} from 'next/font/google'
import {ProductFilterProvider} from "/app/components/NavbarFilter/FilterContext";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'GTG',
    description: 'Creado por Ibai Farina, con los términos de Hector Berger',
}

export default function RootLayout({children}) {
    return (
        <html lang="es">
        <head>
            <meta name="description" content="Glosario de términos gramaticales para las pruebas PAU."/>
            <meta name="keywords"
                  content="glosario, gramática, RAE, selectividad, PAU, evau, glosario términos gramaticales, términos, lengua, castellano, bachillerato"/>
            <meta name="robots" content="index, follow"/>
            <meta charSet="UTF-8"/>

            {/* Open Graph Meta Tags for Social Media */}
            <meta property="og:title" content="Glosario de términos gramaticales"/>
            <meta property="og:description" content="Glosario de términos gramaticales para las pruebas PAU."/>
            <meta property="og:type" content="website"/>

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Glosario de términos gramaticales"/>
            <meta name="twitter:description" content="Glosario de términos gramaticales para las pruebas PAU."/>

            <meta name="google-site-verification" content="RM97TIqIjBFTrckKsIZgr9BDJ7xA8P_rYJfpByf6J2c"/>
            <title>Glosario de términos gramaticales</title>
        </head>
        <body className={inter.className}>
        <ProductFilterProvider>
            {children}
        </ProductFilterProvider>
        </body>
        </html>
    )
}
