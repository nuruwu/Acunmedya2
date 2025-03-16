import { json } from "stream/consumers";


const products = [
    {id:1, name:"Urun 1", price:500},
    {id:2, name:"Urun 2", price:700},
    {id:3, name:"Urun 3", price:800},
    {id:4, name:"Urun 4", price:600},

]
// HTTP REQUEST ANATOMY 
export async function GET()
{

    return new Response(JSON.stringify(products), {

        headers: {"Content-Type": "application/json"}
    });
}

export async function POST(req: Request)
{
    const body = await req.json();
    if (!body.name || !body.price) {
        return new Response(JSON.stringify({error: "Name ve price alani zorunludur."}),
        {status:400, headers: { "Content-Type":"application/json"}}
    
    )}

    const newProduct = {
        id: products.length + 1,
        name: body.name,
        price: body.price
    };
    
    products.push(newProduct)
    
    return new Response(JSON.stringify({message:"Ürün başarıyla eklendi", product: newProduct}), {
        status: 201,
        headers: {"Content-Type":"application/json"}
    })


    
}