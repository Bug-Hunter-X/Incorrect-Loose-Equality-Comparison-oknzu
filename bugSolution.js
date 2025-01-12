function foo(a, b) {
  if (a === b) {
    return true; // Correct: returns true if a and b are strictly equal
  } else if (a == b) {
    return true; // Correct: returns true if a and b are loosely equal
  }

  return false;
}