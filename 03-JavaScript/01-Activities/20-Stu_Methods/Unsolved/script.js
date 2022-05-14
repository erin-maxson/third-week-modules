var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// The unshift method adds an element to the beginning of an array
constellations.unshift('Canis Major');
console.log(constellations);

// The pop method removes the last element in the array
planets.pop();
// The original array is changed
console.log(planets);

planets.shift();
console.log(planets);

// The concat method joins constellations and planets array and returns new array
var galaxy = constellations.concat(planets);
// the galaxy and planet arrays are unchanged
console.log(planets);
console.log(constellations);
console.log(galaxy);

// The toUpperCase method makes the variable in all upper case
var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);

// Original string is unchanged (lowercase)
console.log(star);