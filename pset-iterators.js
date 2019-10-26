/*
Instructions:

For this problem set you will be working with a
list of U.S. Presidents stored as an array of
objects. The array has **already been provided for
you** as a variable named "presidents".

You can see the full list of us presidents in the
provided file named `us-presidents.js`

All of the following problems require that you
use the `presidents` array to solve them.

Only use either `.map()`, `.find()` or `.filter()` to solve the problems in the problem set

  * Do not use `.forEach()`

You can use any additional variables that you deem necessary
to solve each problem.

You can use either regular functions or
arrow functions **for your iterator callbacks**

*/

const presidents = require('./us-presidents.js') // <- DO NOT Remove; this represents an array consisting of U.S. Presidents

/***********
Problem 1:

1. Using the `presidents` array, return the "name" of the
first president that was a member of the "Whig" party.
Save the data in a variable called `firstWhigPresident`,
declared with const

2. Print `firstWhigPresident` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 1:')

// Add your code below this line

// Find and return the first instance of a President 
// with political Whig Party political affiliation
const firstWhigPresident = presidents.find(function(president) {
  if (president.party === 'Whig') {
    return president.president
  }
})

console.log(firstWhigPresident.president)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `presidents` array, return a list of all the
presidents whose first name was "James".
Save the data in a variable called `presidentsNamedJames`,
declared with const

2. Print `presidentsNamedJames` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 2:')

// Add your code below this line

// Filter through all the president objects in the array
// If the first name of the president matches 'James' 
// Return that respective president's object
const presidentsNamedJames = presidents.filter(function(president) {
  firstName = president.president.split(' ')[0]
  if (firstName === 'James') {
    return president.president
  }
})

console.log(presidentsNamedJames)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `presidents` array, return a list of the
parties associated each of the presidents.
Save the data in a variable called `presidentialParties`,
declared with const

2. Print `presidentialParties` to the console

(partial) Expected Result: ['No Party', 'Federalist', 'Democratic-Republican', 'Democratic-Republican', 'Democratic-Republican', 'Democratic', .... ]

Expected Result Shape: An array of strings representing the party name of each president

Tip: your new array should contain 45 elements

************/
console.log('Problem 3:')

// Add your code below this line

const presidentialParties = []

// Filter the Presidents and extract their respective
// Party to the presidentialParties array
const cyclePresidents = presidents.filter(function(president) {
    presidentialParties.push(president.party)
})

console.log(presidentialParties)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `presidents` array, return a
list of the presidents who took office
between 1850 and 1900. Save the data in a variable called `presidentsBetween1850and1900`, declared with const

2. Print `presidentsBetween1850and1900` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 4:')

// Add your code below this line

// Filter the presidents data and convert took office date data to int
// Return the president's data if he took office between 1850 - 1900
const presidentsBetween1850and1900 = presidents.filter(function(president) {
  const tookOfficeInt = parseInt(president.took_office)
  if (tookOfficeInt >= 1850 && tookOfficeInt <= 1900 ) {
    return president
  }
})

console.log(presidentsBetween1850and1900)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `presidents` array, return a list of the
presidents who are still alive today.
Save the data in a variable called `livingPresidents`,
declared with const

2. Print `livingPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 5:')

// Add your code below this line

// Filter through the presidents
// If the death year is false/null then return the president's object
const livingPresidents = presidents.filter(function(president) {
  if (!president.death_year) {
    return president
  }
})

console.log(livingPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `presidents` array,
return the "name" of the first "Republican" president.
Save the data in a variable
called `firstRepublican`, declared with const

2. Print `firstRepublican` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 6:')

// Add your code below this line
// Find the first preisdent with Republican party identification
// and return that president's object
const firstRepublican = presidents.find(function(president) {
  if (president.party === 'Republican') {
    return president
  }
})

console.log(firstRepublican)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 7:

1. Using the `presidents` array, return a
list of the presidents who served less than 4 years
in office. Save the data in a variable
called `shortTermPresidents`, declared with const

2. Print `shortTermPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 7:')

// Add your code below this line

const shortTermPresidents = presidents.filter(function(president) {
  const tookOfficeInt = parseInt(president.took_office)
  const leftOfficeInt = parseInt(president.left_office)
  // Determine time in office in years
  const timeInOffice = leftOfficeInt - tookOfficeInt

  // Only return short term presidents - in office for less
  // than 4 years
  if (timeInOffice < 4 ) {
    return president
  }
})

console.log(shortTermPresidents)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
