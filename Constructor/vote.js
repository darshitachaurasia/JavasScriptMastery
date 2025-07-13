
function Poll(question, options) {
  this.question = question
  this.options = options
  this.votes = {};

  options.forEach(option => {
    this.votes[option] = 0
  })
  this.vote = function(option){
    if(this.votes.hasOwnProperty(option)){
      this.votes[option]++
    }
  }
  this.getResults = function(){
    return this.votes
  }
 
}

// Example Usage:
const poll = new Poll("What's your favorite language?", ["JavaScript", "Python", "Java"]);
poll.vote("JavaScript");
poll.vote("JavaScript");
poll.vote("Python");
console.log(poll.getResults()); // Output: { JavaScript: 2, Python: 1, Java: 0 }


  /**
function createAnalyticsTracker() {
    const events = {};
 return {
    track : (eventName) => {
        events[eventName] =(events[eventName] || 0) + 1;
    },
    getAnalytics : () => events

 };
}

// Usage
const tracker = createAnalyticsTracker();
tracker.track('page_view');
tracker.track('button_click');
tracker.track('page_view');
console.log(tracker.getAnalytics()); // { page_view: 2, button_click: 1 }


   */