
function removeDuplicates(emails) {
  return Array.from(new Set(emails))
}

// Example Usage:
const emails = [
  "user1@mail.com",
  "user1@mail.com",
  "user2@mail.com",
  "user3@mail.com",
  "user2@mail.com"
];

const uniqueEmails = removeDuplicates(emails);

console.log(uniqueEmails);
// Output: ["user1@mail.com", "user2@mail.com", "user3@mail.com"]

  