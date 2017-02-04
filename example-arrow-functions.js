// var names = ['bob', 'hal', 'kal', 'jim'];

// names.forEach(function(name) {
//   console.log('display:', name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrow:', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Bob'));

// var person = {
//   name: 'Hal',
//   greet: function() {
//     names.forEach((n) => {
//       console.log(this.name + ' says hello to ' + n)
//     });
//   }
// }
//
// person.greet();

// Challenge Area
function add(a, b) {
  return a + b;
}

console.log(add(2, 5));
console.log(add(4, 8));

var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(5, 12));

var addExpression = (a, b) => a + b;

console.log(addExpression(62, 12));
