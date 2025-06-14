import Card from "./Card.jsx";

function ProductGrid({products}) {
    return (
        <div className="grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px"
        }}>
            {products.map(product => (
                <Card
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default ProductGrid;
