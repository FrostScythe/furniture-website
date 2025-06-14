// furnitureData.js
import sofa from "./sofa.jpeg";
import dine from "./dine.png";
import chair2 from "./chair2.jpeg";
import bed from "./bed.png";

const furnitureData = [
    {
        id: 1,
        name: "Modern Sofa",
        description: "Comfortable 3-seater sofa with soft fabric and sturdy legs.",
        price: "$499",
        image: sofa
    },
    {
        id: 2,
        name: "Wooden Dining Table",
        description: "6-seater oak wood dining table, perfect for family dinners.",
        price: "$799",
        image: dine
    },
    {
        id: 3,
        name: "Office Chair",
        description: "Ergonomic office chair with adjustable height and lumbar support.",
        price: "$199",
        image: chair2
    },
    {
        id: 4,
        name: "Luna Bed",
        description: "A peaceful night's sleep in this luxurious bed with a view of the sea.",
        price: "$499",
        image: bed
    }
];

export default furnitureData;
