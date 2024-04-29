"use client";

import React, {createContext, useContext, useState} from 'react';
import {ItemTypes} from "app/Product";

// Create the NavbarFilter context
export const FilterContext = createContext();

// Create a custom hook to access the NavbarFilter context
export function useProductFilter() {
    return useContext(FilterContext);
}

// Create the NavbarFilter context provider
export function ProductFilterProvider({children}) {
    const [itemType, setItemType] = useState('');
    const [searchString, setSearchString] = useState('');

    return (
        <FilterContext.Provider value={{
            itemType,
            setItemType,
            searchString,
            setSearchString,
        }}>
            {children}
        </FilterContext.Provider>
    );
}

/*
* Constants for default values
* */

// Types
export const itemTypes = Object.values(ItemTypes);