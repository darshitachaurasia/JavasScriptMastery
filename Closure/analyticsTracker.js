
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


  