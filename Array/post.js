
function groupByCategory(posts) {
    let grouped = {}
  posts.forEach((post)=> {if(!grouped[post.category] ){
    grouped[post.category] = []
  }
grouped[post.category].push(post.title);
})
return grouped;
}

// Example Usage:
const posts = [
  { title: "Learn JS", category: "Programming" },
  { title: "CSS Tips", category: "Web Dev" },
  { title: "Master React", category: "Programming" },
  { title: "HTML Basics", category: "Web Dev" }
];

const result = groupByCategory(posts);
console.log(result);
// Output: 
// {
//   "Programming": ["Learn JS", "Master React"],
//   "Web Dev": ["CSS Tips", "HTML Basics"]
// }


  