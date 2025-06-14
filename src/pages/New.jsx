import chairData from "../assets/chair/chairData.js";
import { ProductGrid } from "../components/"; // Make sure ProductGrid is a default export

function New() {
    return (
        <section className="px-4 py-10" style={{display: "flex", justifyContent: "center"}}>
            <div className="max-w-7xl mx-auto text-left mb-8">
                <h2 className="text-3xl font-bold text-stone-700 py-4 mt-4">New Arrivals</h2>
                <h5 className="text-m text-stone-500 py-9 mb-8" style={{marginBottom:"25px"}}>Explore our latest collection of furniture, designed to bring comfort and style to your home.</h5>
            <ProductGrid products={chairData}/>
            </div>
        </section>
    );
}

export default New;