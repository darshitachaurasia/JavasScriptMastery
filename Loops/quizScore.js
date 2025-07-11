

const questions = [
  {
    question: 'What is the capital of France?',
    points: '10',
    correctAnswer: 'Paris'
  },
  {
    question: 'Define polymorphism in OOP.',
    points: '15',
    correctAnswer: 'Polymorphism allows objects to be treated as instances of their parent class rather than their actual class.'
  },
  {
    question: 'Explain the concept of closures in JavaScript.',
    points: '20',
    correctAnswer: 'A closure is a function that has access to its own scope, the outer function’s scope, and the global scope.'
  },
  {
    question: 'What is the time complexity of binary search?',
    points: '10',
    correctAnswer: 'O(log n)'
  },
  {
    question: 'Name any three cloud service models.',
    points: '15',
    correctAnswer: 'IaaS, PaaS, SaaS'
  },
];


const userAnswers = [
  { question: 'What is the capital of France?', userAnswer: 'Paris' },
  { question: 'Define polymorphism in OOP.', userAnswer: 'It’s when one function becomes many' },
  { question: 'Explain the concept of closures in JavaScript.', userAnswer: 'They are similar to loops' },
  { question: 'What is the time complexity of binary search?', userAnswer: 'O(n)' },
  { question: 'Name any three cloud service models.', userAnswer: 'AWS, Azure, Google Cloud' },
];


function calculateQuizScore() {
   let score = 0
    for(let i = 0 ; i<questions.length ; i++){
        q = questions[i]
        
        a = userAnswers[i]
        
        const points = Number(q.points)
        
        q.correctAnswer==a.userAnswer? score += points : null ;
     
     
    

       

    }

    const percent = (score/70)*100;
    
   return(`Score : ${score} Percentage : ${percent.toFixed(2)}%` )
    

}


calculateQuizScore();

console.log(calculateQuizScore());
