
// Function to generate the menu
function generateMenu(menu) {
  
  //base case
  //recursive case
  menu.forEach(function(item) {
    console.log('Title: ' + item.title + ', URL: ' + item.url);
    if (item.submenu) {
      generateMenu(item.submenu);  // Recursive call for submenu items
    }
  });
  
}

// menu array
const menu = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services", submenu: [
      { title: "Web Development", url: "/services/web-development" },
      { title: "App Development", url: "/services/app-development", submenu: [
        { title: "iOS", url: "/services/app-development/ios" },
        { title: "Android", url: "/services/app-development/android" }
      ]}
    ]
  },
  { title: "Contact", url: "/contact" }
];

// Generate the menu
generateMenu(menu);

