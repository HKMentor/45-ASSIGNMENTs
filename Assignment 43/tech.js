// /Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. Call show_magicians() with each array
// to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Original array of magician names
var originalMagicians = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];
// Make a copy of the original array to keep it unchanged
var unchangedMagicians = originalMagicians.slice();
// Call make_great() with a copy of the original array
var greatMagicians = make_great(originalMagicians.slice());
// Show the original names
console.log("Original Magicians:");
show_magicians(unchangedMagicians);
// Show the modified names
console.log("\nModified Magicians:");
show_magicians(greatMagicians);
