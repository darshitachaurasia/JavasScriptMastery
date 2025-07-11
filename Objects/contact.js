
// Function to create a shopping cart object
// Function to create a Contact object constructor
function createContact(name, phone, email, address) {
    return {
        name: name,
        phone: phone,
        email: email,
        address: address
    };
}

// Function to create a Contact List object
function createContactList() {
    const contactList = [];

    // Method to add a new contact to the list
    function addContact(name, phone, email, address){
      const newContact = createContact(name, phone, email, address)
      contactList.push(newContact)
    }
        
    

    // Method to display contact details
    function displayContactDetails(contact){
       console.log(`Name : ${contact.name}`)
            console.log(`Phone : ${contact.phone}`);
            console.log(`Email : ${contact.email}`);
            console.log(`Address : ${contact.address}`);
            
    }

    // Method to update a contact's phone number or email
     function updateContactInfo(contact,newEmail,newPhone){
        contact.email = newEmail
       contact.phone = newPhone
    }

    // Return methods to interact with the contact list
    return{
        contactList,
        addContact,
        displayContactDetails,
        updateContactInfo
    }
}

// Create a contact list instance
const myContactList = createContactList();

// Add initial contacts to the contact list
myContactList.addContact("John Doe", "555-1234", "john@example.com", "123 Elm Street, Springfield");
myContactList.addContact("Jane Smith", "555-5678", "jane@example.com", "456 Oak Avenue, Metropolis");

// Display the first contact's details
myContactList.displayContactDetails(myContactList.contactList[0]);

// Update the second contact's phone number and email
myContactList.updateContactInfo(myContactList.contactList[1], "555-8765", "jane.smith@example.com");

// Display the updated second contact's details
console.log("\nUpdated Contact Details:");
myContactList.displayContactDetails(myContactList.contactList[1]);








  