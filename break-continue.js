for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break; // stops and exits the cycle
  }
  document.write(i + ", "); // last output number is 4
}
for (var i = 0; i < 10; i++) {
  if (i == 5) {
    continue; // skips the rest of the cycle
  }
  document.write(i + ", "); // skips 5
}
