
// Function to evaluate exam grade and give feedback
function evaluateGrade(score) {
  if(score>=90 && score<=100){
    console.log('Excellent')
   }else if(score>=80 && score<90){
    console.log('Good job')
   }else if(score>=70 && score<80) {
    console.log('Passing Grade')
   }else if(score>=60 && score<70){
    console.log('Needs Improvement ')
   }else if(score<60){
     console.log('Failed')
   } else{
     console.log('Invalid score')
   }
}
// Example usage
let examScore = 85;  
// You can change this value to test different scores
evaluateGrade(examScore);


  