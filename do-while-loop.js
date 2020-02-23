var i = 1; // initialize
do {
  // enters cycle at least once
  i *= 2; // increment to avoid infinite loop
  document.write(i + ", "); // output
} while (i < 100); // repeats cycle if statement is true at the end
