const D = require('./node_modules/datelib-nn');
const data = require('./data.json');
// //Challenge 0:
// console.log(data);

// Challenge 1:
function fullName(id: number): string {
  const first = data[id].first_name;
  const firstName = first[0].toUpperCase() + first.slice(1);
  const last = data[id].last_name;
  const lastName = last[0].toUpperCase() + last.slice(1);
  console.log(`${firstName} ${lastName}`);
}

// Challenge 2:
function purchaseDate(id) {
  const pDate = new D(data[id].purchased).format('M D, Y');
  console.log(`Purchased: ${pDate}`);
}

// Challenge 3:
function whenPayment(id) {
  const lastPayment = new D(data[id].lastpayment).when();
  console.log(`Last payment was made ${lastPayment[0].toLowerCase()}`);
}

// Challenge 4
function phoneNumber(id) {
  const pNum = data[0].phone;
  console.log(pNum);
}

function printDataById(jsonID) {
  const id = jsonID - 1; // Our first ID starts with 1 in our json, but corresponds to index 0.
  fullName(id);
  purchaseDate(id);
  whenPayment(id);
  phoneNumber(id);
}

printDataById(1);
