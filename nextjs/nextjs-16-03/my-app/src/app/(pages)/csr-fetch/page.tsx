"use client"

import { useEffect, useState } from "react"

export default function CsrFetchPage(){
        
    const [products, setProducts] = useState<any>([]);
    const fetchProducts = async () => {
        const response = await fetch("/api/products");  
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();    
    }, [])

    return(
    <>
       {products.map((product: any) => (
        <p key={product.id}>{product.name} {product.price}</p>)
        )}
    </>
    )
}
