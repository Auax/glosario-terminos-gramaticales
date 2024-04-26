"use client";
import {useState} from "react";
import jsonData from './data.json';
import ProductsRenderer from "./components/ProductsRenderer";
import Filter from "./components/ProductFilter/Filter";

export default function Page() {

    const [priceRange, setPriceRange] = useState({min: 10, max: 200});


    return (
        <main className="container mx-auto md:p-10 sm:p-10 p-3">
            <h1 className="title text-white">Glosario de Términos Gramaticales (GTG)</h1>
            <span className="text-gray-500">Página hecha por Ibai Farina del Olmo. Todos los términos son de Hector Berger</span>
            <Filter/>
            <ProductsRenderer data={jsonData}/>
        </main>
    )
}
