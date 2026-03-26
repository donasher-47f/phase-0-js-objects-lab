// Task 2: Declare and Initialize an Attendee Object
const attendee = {
    attendeeID: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Task 3: Create a Function to Log Attendee Name
function logAttendeeName(attendee) {
    console.log("Attendee Name: " + attendee.name);
}

// Task 4: Create a Function to Log Ticket Price
function logTicketPrice(attendee) {
    console.log("Ticket Price: $" + attendee.ticketPrice);
}

// Task 5: Create a Function to Update Ticket Type
function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
    console.log("Updated Ticket Type: " + attendee.ticketType);
}

// Task 6: Create a Function to Update Ticket Price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
    console.log("Updated Ticket Price: $" + attendee.ticketPrice);
}

// Task 7: Create a Function to Remove the Event Property
function removeEventProperty(attendee) {
    delete attendee.event;
    console.log("Event property removed.");
}

// Task 8: Create a Function to Add a Checked-in Property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
    console.log("Checked In Status added: " + attendee.checkedIn);
}

// --- MODULE EXPORTS (Required for AutoTests) ---
module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};

// Optional: Test logs to see results in your terminal
logAttendeeName(attendee);
logTicketPrice(attendee);
updateTicketType(attendee, "Regular");
updateTicketPrice(attendee, 100.00);
removeEventProperty(attendee);
addCheckedInProperty(attendee);
console.log(attendee);