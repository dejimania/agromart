let faker = require('faker');
let data = [];
let categories = ["Cash Crop", "Grains", "Tubers", "Fruits", "Vegetables"];
faker.seed(100);
for(let i = 1; i < 503; i++) {
    let category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    });
}

module.exports = function() {
    return {
        categories: categories,
        products: data,
        orders: []
    };
}

// module.exports = function () {
//   return {
//     categories: ["Cash Crop", "Grains", "Tubers", "Fruits", "Vegetables"],
//     products: [
//       { id: 1, name: "Cocoa", category: "Cash Crop",
//           description: "A Kilo of cocoa bean", price: 275 },
//       { id: 2, name: "Coffee", category: "Cash Crop",
//           description: "Highest coffee grade from Africa", price: 48.95 },
//       { id: 3, name: "Rice", category: "Grains",
//           description: "50KG Bag of Premium Parboiled Rice", price: 79.95 },
//       { id: 4, name: "Maize", category: "Grains",
//           description: "High quality maize (50KG) bag",
//           price: 34.95 },
//       { id: 5, name: "Millet", category: "Grains",
//           description: "Flat-packed 35, Millet", price: 50 },
//       { id: 6, name: "Yam", category: "Tubers",
//           description: "10 Quality yam tubers", price: 25 },
//       { id: 7, name: "Watermellon", category: "Fruits",
//           description: "Big Sweet watermellon",
//           price: 9.95 },
//       { id: 8, name: "Orange", category: "Fruits",
//           description: "10 kilo high quality oranges", price: 15 },
//       { id: 9, name: "Tomato", category: "Vegetables",
//           description: "Fresh Organic Tomato 5 Kilo", price: 12.99 }
//     ],
//     orders: []
//   }
// };