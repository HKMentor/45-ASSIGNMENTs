//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by
//adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function showMagicians(magicians) {
    // Print the list of magicians
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    // Add 'the Great' to each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
makeGreat(magicians);
showMagicians(magicians);
