"use client";

import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {indexRangeMaxDefault, indexRangeMinDefault, itemTypes, useProductFilter} from "./FilterContext";


const Filter = () => {
    const {
        indexRange, setIndexRange,
        itemType, setItemType,
        searchString, setSearchString
    } = useProductFilter();

    const handlePriceChange = (values) => {
        setIndexRange({min: values[0], max: values[1]});
    };

    const handleTypeChange = (event) => {
        setItemType(event.target.value);
    };

    const handleSearchStringChange = (event) => {
        setSearchString(event.target.value);
    };

    return (
        <div className="grid grid-flow-col gap-4 bg-blue-50 p-5 rounded-md mt-4">
            {/*<div className="price-range">*/}
            {/*    <label className="font-bold" htmlFor="priceRangeSlider">Rango</label>*/}
            {/*    <Slider*/}
            {/*        id="priceRangeSlider"*/}
            {/*        className="w-full mt-2"*/}
            {/*        min={indexRangeMinDefault}*/}
            {/*        max={indexRangeMaxDefault}*/}
            {/*        step={1}*/}
            {/*        range*/}
            {/*        defaultValue={[indexRange.min, indexRange.max]}*/}
            {/*        onChange={handlePriceChange}*/}
            {/*        trackStyle={[{backgroundColor: 'black'}]}*/}
            {/*        railStyle={{backgroundColor: '#606060'}}*/}
            {/*        handleStyle={[{*/}
            {/*            backgroundColor: 'black',*/}
            {/*            borderColor: 'black',*/}
            {/*            opacity: 1,*/}
            {/*        }, {backgroundColor: 'black', borderColor: 'black', opacity: 1}]}*/}
            {/*    />*/}
            {/*    <div className="flex justify-between text-sm">*/}
            {/*        <span>${indexRange.min}</span>*/}
            {/*        <span>${indexRange.max}</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="product-types flex flex-col">
                <label className="font-bold" htmlFor="productTypesSelector">Bloque:</label>
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
            <div className="search-product flex flex-col">
                <label className="font-bold" htmlFor="searchProduct">Buscar por nombre:</label>
                <input className="py-2 px-4 border border-blue-900/20 rounded-lg"
                       id="searchProduct"
                       type="text" placeholder="Adjetivo adverbial"
                       onChange={handleSearchStringChange}/>
            </div>
        </div>
    );
};

export default Filter;