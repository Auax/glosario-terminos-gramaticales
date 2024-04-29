import {stringSimilarity} from "string-similarity-js";


const stringSimilarityThreshold = 0.6;

export const filterItems = (products,
                            itemType,
                            searchString,
) => {
    console.log(searchString);
    // Filtering logic here
    return products.filter((product) => {
        const name = product.name.toLowerCase();

        // const isIndexRange = product.itemIndex >= indexRange.min && product.itemIndex <= indexRange.max;
        const isTypeMatch = itemType === '' || product.type === itemType;
        const isSearchMatch = searchMatch(searchString.toLowerCase(), name)

        return isTypeMatch && isSearchMatch;
    });
};

const searchMatch = (searchValue, value) => {
    const isIncluded = value.includes(searchValue);
    let isSimilar = stringSimilarity(value, searchValue) >= stringSimilarityThreshold;
    return searchValue === "" || isSimilar || isIncluded;
}