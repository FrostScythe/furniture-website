import React from 'react';
import chairData from "../assets/chair/chairData.js";
import {ProductGrid} from "./index.js"; // Make sure ProductGrid is a default export

function NewArrivalSection() {
    return (
        <section className="px-4 py-10" style={{display: "flex", justifyContent: "center"}}>
            <div className="max-w-7xl mx-auto text-left mb-8">
                <h2 className="text-3xl font-bold text-stone-700 py-9" style={{marginBottom:"25px"}}>New Arrivals</h2>
            <ProductGrid products={chairData}/>
            </div>
        </section>
    );
}

export default NewArrivalSection;