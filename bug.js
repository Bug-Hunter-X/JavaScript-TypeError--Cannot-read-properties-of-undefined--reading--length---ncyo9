function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Accessing length of a potential non-object
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: TypeError: Cannot read properties of undefined (reading 'length')