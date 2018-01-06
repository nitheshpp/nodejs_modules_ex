//const notes = require('./nodes.js');
const  _= require('lodash');
//console.log(module);
//console.log (`your age is ${notes.age} `);
//var aaa=notes.addNote();
//var aa=notes.add(3,4)
//console.log(aa);
//console.log(_.isString('abc'));
//console.log(_.isString(124));

//var array=['arjun1','arjun','ramu'];
//console.log(_.uniq(array));

/*
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc']));

console.log(_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now()));

console.log(_.escapeRegExp('[lodash](https://lodash.com/)'));
*/
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
