# Incorrect Loose Equality Comparison

This repository demonstrates a common JavaScript error involving the misuse of loose equality (`==`) in comparison functions.

The original code incorrectly returns `false` even if the two values are loosely equal (`==`) but not strictly equal (`===`). This happens when implicit type coercion leads to the values being considered equal under loose equality but not strict equality.

The solution corrects this by handling loose equality as expected, ensuring that loose equality is used correctly in the comparison. 