// We're going to make our own Contacts application! The application must perform two types of operations:

// add name, where  is a string denoting a contact name. This must store  as a new contact in the application.
// find partial, where  is a string denoting a partial name to search the application for. It must count the number of contacts starting with  and print the count on a new line.
// Given  sequential add and find operations, perform each operation in order.

const contacts = new Set(); 
const partialContacts = {};

// 0(N) time to add, though 
function addContact(name) {
  contacts.add(name);
  let partial = '';
  for (let i = 0; i < name.length; i += 1) {
    partial += name[i];
    if (partialContacts[partial]) partialContacts[partial].push(name)
    else partialContacts[partial] = [name]; 
  } 
}

// 0(1) time to find, though C * 0(n) space complexity where C is the length of the string
function findParialCount(partial) {
  if (partialContacts[partial]) return partialContacts[partial].length;
  else return 0; 
}

addContact('Patrick');
addContact('Party');

console.log(contacts, partialContacts)