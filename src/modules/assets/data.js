import speaker from '../assets/materials/speaker.png';
import stero from '../assets/materials/stero.png'; 
import light from '../assets/materials/light.png';
import bulb from '../assets/materials/bulb.png';

let data_product = [
    {
        id: 1,
        name: "Speaker",
        image: speaker,
        new_price: 999.00,
        old_price: 1500.00,
        category: "electronics",
    },
    {
        id: 2,
        name: "Light",
        image: light,
        new_price: 999.00,
        old_price: 1500.00,
        category:"exterior",
    },
    {
        id: 3, // Corrected id to be unique
        name: "Bulb",
        image: bulb,
        new_price: 999.00,
        old_price: 1500.00,
        category:"exterior",
    },
    {
        id: 4, 
        name: "Stero", 
        image: stero,
        new_price: 999.00,
        old_price: 1500.00,
        category:"exterior",
    },
];

export default data_product;