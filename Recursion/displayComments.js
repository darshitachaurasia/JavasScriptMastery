
// Function to display comments and their nested replies
function displayComments(comments) {
  
    comments.forEach((comment)=> {
        console.log('ID :' + comment.id + ',Comment :' + comment.text )
    if(comment.replies){
        displayComments(comment.replies)
    }
    })

}

// Simplified comments array
const comments = [
  { id: 1, text: "First comment", replies: [
      { id: 2, text: "Reply to first", replies: [
          { id: 4, text: "Nested reply" }
        ]}
    ]},
  { id: 3, text: "Another comment" }
];

// Call the function
displayComments(comments);
