
// Sample input: Array of event objects
const events = [
  { name: "Music Festival", date: "2025-07-06", lat: 40.7128, lng: -74.0060 },
  { name: "Art Exhibition", date: "2024-12-23", lat: 34.0522, lng: -118.2437 },
  { name: "Tech Meetup", date: "2024-12-24", lat: 37.7749, lng: -122.4194 },
];

// Function to find events happening today
function findEventsHappeningToday(events) {
 const today = new Date().toISOString().split("T")[0];
    return events.filter(event => event.date === today)
}

// Call the function and log the result
const todayEvents = findEventsHappeningToday(events);
console.log("Events happening today:", todayEvents);

