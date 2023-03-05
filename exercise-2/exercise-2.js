function reverseString(string) {
  // Coding here
  let x = string.split("");

  let y = x.reverse().join("");
  return y;
}

// split

console.log(reverseString("hello there"));