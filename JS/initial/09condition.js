const userLoggedIn = true;
const debitCard = false;
const loggedFromGoogle = false;
const loggedInFromEmail = false;

if ((userLoggedIn && debitCard) || 2 == 3) {
  console.log("Allowed To buy Course");
} else if (loggedInFromEmail || loggedFromGoogle) {
  console.log("Might LoggedIn from Email or from Google");
} else {
  console.log("this is going to be a not registered user");
}

// Nullish Collescing Operator

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10 ?? 100;

console.log(val1);
