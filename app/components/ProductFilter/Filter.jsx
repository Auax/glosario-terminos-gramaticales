"use client";

import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {itemTypes, useProductFilter} from "./FilterContext";


const Filter = () => {
    const {
        itemType, setItemType,
        searchString, setSearchString,
    } = useProductFilter();

    const handleTypeChange = (event) => {
        setItemType(event.target.value);
    };

    const handleSearchStringChange = (event) => {
        setSearchString(event.target.value);
    };

    return (
        <div className="grid sm:grid-flow-col gap-4 bg-blue-50 p-5 rounded-md mt-4">
            <div className="search-product flex flex-col ">
                <label className="font-bold" htmlFor="searchProduct">Buscar por nombre</label>
                <input className="py-2 px-4 border border-blue-900/20 rounded-lg"
                       id="searchProduct"
                       type="text" placeholder="Adjetivo adverbial"
                       onChange={handleSearchStringChange}/>
            </div>
            <div className="product-types flex flex-col">
                <label className="font-bold" htmlFor="productTypesSelector">Bloque</label>
                <select
                    className="py-2 px-4 border border-blue-900/20 rounded-lg h-full"
                    id="productTypesSelector"
                    value={itemType}
                    onChange={handleTypeChange}>
                    <option value="">Todos</option>
                    {itemTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;