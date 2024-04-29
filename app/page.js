"use client";
import {useState} from "react";
import jsonData from './data.json';
import ProductsRenderer from "./components/ProductsRenderer";
import Filter from "./components/NavbarFilter/NavbarFilter";
import Sticky from 'react-sticky-el';
import {FaPaypal} from "react-icons/fa6";


export default function Page() {

    const [priceRange, setPriceRange] = useState({min: 10, max: 200});


    return (
        <main className="container mx-auto md:p-10 sm:p-10 p-3">
            <h1 className="title text-white">Glosario de Términos Gramaticales (GTG)</h1>
            <p className="text-gray-400">Página hecha por <b>Ibai Farina</b>. Muchos de los términos son de <b>Hector
                Berger</b></p>
            <p className="text-gray-400">Se ha invertido mucho esfuerzo en la creación de esta página, si te es útil,
                considera hacer una donación. </p>
            <a href="https://www.paypal.com/donate/?hosted_button_id=BBFZ9XVGLF48W" target="_blank">
                <div
                    className="p-2 bg-white text-gray-950 font-bold border-2 inline-flex rounded mt-2 ">Donar <FaPaypal
                    className="mt-1 ml-2 text-blue-800"/></div>
            </a>
            <div className="z-20 relative pt-4">
                <Sticky>
                    <Filter/>
                </Sticky>
            </div>
            <ProductsRenderer data={jsonData}/>
        </main>
    )
}
