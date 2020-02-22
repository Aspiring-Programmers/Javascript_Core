var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

alert(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item

for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
    console.log(dogs[i]);
}

dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
dogs.pop();                             // remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.slice(1,4);                        // elements from [1] to [4-1]
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort

/* More Array Methods */

// Accessing Elements I

a1.concat(a2) // Return new array by joining arrays a1 and a2 together
a1.join(separator) // Join all elements of array a1 into a string separated by separator arg
a1.slice(start, end) // Extract a section from start to end of array a1 and return a new array
a1.indexOf(obj) // Return first index of obj within array a1
a1.lastIndexOf(obj) // Return last index of obj within array a1

// Iterating I

a1.forEach(fn) // Calls function fn for each element in the array a1
a1.every(fn) // Return true if every element in array a1 satisfies provided testing function fn
a1.some(fn) // Return true if at least one element in array a1 satisfies provided testing function fn
a1.filter(fn) // Create a new array with all elements of array a1 which pass the filtering function fn

// Iterating II

a1.map(fn) // Create a new array with results of calling function fn on every element in array a1
a1.reduce(fn) // Apply a function fn against an accumulator and each value (from left to right) of the array as to reduce it to a single value
a1.reduceRight(fn) // Apply a function fn against an accumulator and each value (from right to left) of the array as to reduce it to a single value

// Mutating I

a1.pop() // Remove and return last element from array a1
a1.push(obj) // Add obj to end of array a1 and return new length
a1.reverse() // Reverse order of elements of array a1 in place
a1.sort() // Sort the elements of array a1 in place
a1.splice(start, deleteCount, items) // Change content of array a1 by removing existing elements and/or adding new elements
a1.unshift(obj) // Add obj to start of array a1 and return new length

// General I

a1.toString() // Return a string representing array a1 and its elements (same as a1. join(','))
a1.toLocaleString() // Return a localized string representing array a1 and its elements (similar to a1.join(','))
Array.isArray(var) // Return true if var is an array
a1.length // Return length of array a1
a1[0] // Access first element of array a1