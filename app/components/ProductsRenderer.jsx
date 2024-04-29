"use client";

import React from 'react';
import LazyLoad from 'react-lazy-load';
import ListItem from "./ListItem/ListItem";
import {filterItems} from "./NavbarFilter/FilterItems";
import {useProductFilter} from "./NavbarFilter/FilterContext";

const ProductsRenderer = (props) => {

    // Note: indexRange is not currently used in FilterProducts.js,
    // so any value set for indexRange won't cause any effect
    // I'm leaving the variable here so if I need it for something, just uncomment the lines in FilterProducts.js.

    const {
        itemType, setItemType,
        searchString, setSearchString,
    } = useProductFilter();

    const filteredProducts = filterItems(props.data, itemType, searchString);


    return (
        <LazyLoad height={762}>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-8 mt-8 mb-8">
                {filteredProducts.map((item, index) => (
                    <ListItem
                        key={index}
                        title={item.name}
                        itemIndex={index + 1}
                        // imageURL={item.imageURL}
                        type={item.type}
                        description={item.description}
                    />
                ))}
            </div>
        </LazyLoad>
    );
};


export default ProductsRenderer;