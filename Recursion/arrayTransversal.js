
const categories = [
  { name: "Electronics", subcategories: [
      { name: "Mobile Phones", subcategories: [
          { name: "Smartphones" }, { name: "Feature Phones" }
        ]},
      { name: "Laptops" }
    ]},
  { name: "Clothing", subcategories: [
      { name: "Men's" }, { name: "Women's" }
    ]}
];

function printCategories(categories) {

    categories.forEach((category)=> {
        console.log('Name :' + category.name  )
    if(category.subcategories){
        printCategories(category.subcategories)
    }
    })

}

printCategories(categories);
