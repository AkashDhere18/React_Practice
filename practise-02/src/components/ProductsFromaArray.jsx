const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 200 }
];

export default function ProductsFromaArray() {

    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <h3>{p.name}</h3>
                    <p>${p.price}</p>
                    <button onClick = {() => {
                        console.log(p.name ,'added to cart')
                    }}>Add To cart</button>
                </div>
            ))}
        </div>
    );
}