
function isSlotAvailable(bookedSlots, requestedSlot) {
return !bookedSlots.includes(requestedSlot);
}

// Function call example
const bookedSlots = ["10:00 AM", "11:00 AM"];
console.log(isSlotAvailable(bookedSlots, "12:00 PM")); // true
console.log(isSlotAvailable(bookedSlots, "11:00 AM")); // false

  