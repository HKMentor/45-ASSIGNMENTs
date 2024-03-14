//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name
// of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
//initial guest list//
var guestlist = ["NEHA", "KANWAL", "RAHEELA"];
console.log(guestlist[0] + ":i would be honored if you could join me for dinner.");
console.log(guestlist[1] + ":i would be honored if you could join me for dinner.");
console.log(guestlist[2] + ":i would be honored if you could join me for dinner.");
console.log("/n RAHEELA will not come bcz of some urgent work! ");
//update guest list//
var guest = ["neha", "kanwal", "hooria"];
guest.pop;
console.log(guest);
guest.push("maryam", "hania");
console.log(guest);
console.log(guest[0] + ":i would be honored if you could join me for dinner.");
console.log(guest[1] + ":i would be honored if you could join me for dinner.");
console.log(guest[2] + ":i would be honored if you could join me for dinner.");
console.log(guest[3] + ":i would be honored if you could join me for dinner.");
console.log(guest[4] + ":i would be honored if you could join me for dinner.");
