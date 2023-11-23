"use client";

import React, {createContext, useContext, useState} from 'react';
import {ItemTypes} from "app/Product";

// Create the Filter context
export const FilterContext = createContext();

// Create a custom hook to access the Filter context
export function useProductFilter() {
    return useContext(FilterContext);
}

// Create the Filter context provider
export function ProductFilterProvider({children}) {
    const [indexRange, setIndexRange] = useState({min: indexRangeMinDefault, max: indexRangeMaxDefault});
    const [itemType, setItemType] = useState('');
    const [searchString, setSearchString] = useState('');

    return (
        <FilterContext.Provider value={{
            indexRange,
            setIndexRange,
            itemType,
            setItemType,
            searchString,
            setSearchString
        }}>
            {children}
        </FilterContext.Provider>
    );
}

/*
* Constants for default values
* */

// Price
export const indexRangeMaxDefault = 200;
export const indexRangeMinDefault = 1;

// Types
export const itemTypes = Object.values(ItemTypes);