/**
 *  const events = {};
 return {
    track : (eventName) => {
        events[eventName] =(events[eventName] || 0) + 1;
    },
    getAnalytics : () => events

 };
 * @param {*} tags 
 */

 /**
  * function groupByCategory(posts) {
    let grouped = {}
  posts.forEach((post)=> {if(!grouped[post.category] ){
    grouped[post.category] = []
  }
grouped[post.category].push(post.title);
})
return grouped;
}
  * @param {*} tags 
  */

 
function countTags(tags) {
 const counts = {};
 tags.forEach((tag) => {if(!counts[tag] ){
    counts[tag] = 1
  }else{
    counts[tag]++
  }
})
return counts;
}

// Example Usage:
const tags = ["css", "html", "css", "js", "html", "js", "js"];

const result = countTags(tags);

console.log(result);
// Output: { css: 2, html: 2, js: 3 }

  