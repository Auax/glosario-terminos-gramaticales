"use client";
import {ProductTypes} from "@/app/ProductTypes";
import ProductsRenderer from "@/app/components/ProductsRenderer";
import Filter from "@/app/components/Filter/Filter";
import {useState} from "react";

export default function Index() {

    const [priceRange, setPriceRange] = useState({min: 10, max: 200});

    const products = [
        {
            name: "Maison Margiela Pixelated Text T-shirt",
            url: "https://www.pandabuy.com/product?ra=1&url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D714167582960&inviteCode=ZGCH25AQW",
            priceUSD: 29,
            priceCNY: 189,
            imageURL: "https://i.imgur.com/ljAWzDW.png",
            type: ProductTypes.TSHIRT,
        },
        {
            name: "Air Jordan 1 Dark Mocha",
            url: "https://www.pandabuy.com/product?ra=142&url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D5387901129%26spider_token%3D4572&utm_source=url&utm_medium=pdb&utm_campaign=normal&inviteCode=8S7BDFLNE",
            priceUSD: 54.64,
            priceCNY: 360,
            imageURL: "https://lh3.googleusercontent.com/u/0/docs/AOD9vFoiAIj5G3d6GPGNGfhqJJFqjJcIL-DbqNCJVCN1ptG66aoGWrB2e9HBhhRydoIvOtzJPffyL300SiQwlCOZpVg6nevn9sqpLDWtvvROS9bcPsxuIRlW-ns7td8EytQ_QpZdceVA-JHQtRZt5saMkXMAe1hrYHWTKvwzdnwE_6b5KBIGWRt1sYX36Akb7bNr-egmvXyuD18hYGqypUWwSzbe-i8vwAb-6pYqUUwVTgntQqnFDiifXwnb_gCXpXKG8t3b1KH87oFhA_guOqxaWkhYGnWmNF-Vq1QBXsWERn-ZtEwibv9Ayf6DhCFJomVL0h6LsT3-ePAOv549Gx8fZekLsbBl8O-mwnfdEYszl-J3XfRHgdKud4TmprdmohBlvNn7FDAn7hhYJs4BctMG6FE75nuqC13EA587DUP3ZbjGTAc3ZQOiTzm2OpJNr8dmH4a2VBzDYtZJPDNov1c0xot_mY2EFpgD3t-pp4zEn_g2npcFG9A6lda-9rpnzwuSgZ0SX1evBGlZnU7kIDX8ig31jBJxo6NHjBiOlREs0j15aWjUCYOuVwtomyoGlS7YVc_S9xKN3RrZRz_W4j2bcs7W_tl5uV2iQ9H1qG_Ifw3_L_nnIBx0Q-qk0hthK0hTOh22e-hK-iwpi-rdaLucxveaFAHMxRsCc-U6GGgXR9ZAtLi6KvVS_OQJe476a_ByII3heNMUDKtJS-BIjxUrfEIj1Hb7bCXwLG98Im-XC98Mtsaz-F05r3p6K2NJrQBrQ3mtHI4b6hHe1n4nLV5IDIxy7cX2Pdvgoptn34aOIJOppoYwOjtkUShBLgrI7F6hrqXpRwB2fKSMyTsgoTvmgn-wJHCaPiGK2fjEBQy7rAkPCrASk0JBDe-xvwdJYRpMIPKAE5YX-lmZl-ok3VU2Rb0XKWSKSayRKOS7lIWLmUBA4_Jd7nR_nJGIagX4wOz7GgVF8A2cmZ9Sh3sUA3lf9k5hPbGmoEpmQxc0HkZQ=w174-h109",
            type: ProductTypes.SHOE,
        },
    ]

    return (
        <main className="container mx-auto mt-10">
            <h1 className="title">Products</h1>
            <Filter/>
            <ProductsRenderer products={products}/>
        </main>
    )
}
