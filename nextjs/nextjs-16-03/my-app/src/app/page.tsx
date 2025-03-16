
export default async function Home() {
  
  const response = await fetch("http://localhost:3001/api/products");  
  const data = await response.json();
  console.log(data);

  return (
   <>
      <p>{data.length}</p>
      {data.map((product:any) => <p key={product.id}>{product.name} {product.price}</p>)}
   </>
  );
}
