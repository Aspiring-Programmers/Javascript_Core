var age = 23;
var status = "N/A";

if (age < 0) {
  // logical condition
  status = "Please enter a valid age"; // executed if condition is true
} else if (age >= 0 && age <= 3) {
  // else if block comes next
  status = "Toddler";
} else if (age >= 4 && age <= 12) {
  status = "Kid"; 
} else if (age >= 13 && age <= 17) {
  status = "Teenager";
} else if (age >= 18 && age <= 39) {
  status = "Young Adult"
} else if (age >= 40 && age <= 59) {
  status = "Middle Aged Adult";
} else (age >= 60) {
  // Executed if all other conditions fail
  status = "Old and Senior Citizen"
}
