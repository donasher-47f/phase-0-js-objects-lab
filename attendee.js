// Task 2: Declare and Initialize an Attendee Object
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Task 3: Create a Function to Log Attendee Name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}

// Task 4: Create a Function to Log Ticket Price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

// Task 5: Create a Function to Update Ticket Type
function updateTicketType(attendee, newType) {
    attendee.ticketType = newType;
}

// Task 6: Create a Function to Update Ticket Price
function updateTicketPrice(attendee, newPrice) {
    attendee.ticketPrice = newPrice;
}

// Task 7: Create a Function to Remove the Event Property
function removeEventProperty(attendee) {
    delete attendee.event;
}

// Task 8: Create a Function to Add a Checked-in Property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}

// --- CRITICAL: MODULE EXPORTS ---
// This allows the Jest tests to find your functions.
module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};