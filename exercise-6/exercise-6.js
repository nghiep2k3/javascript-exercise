function convertNumber(number) {
  // Coding here
  // Math.truc trả về số nguyên loại bỏ thập phân
  var x = [];
  while (number > 0) {
    x.push(number  % 2);  
    number = Math.trunc((number / 2));
  }
  return x.reverse().join("");
}

console.log(convertNumber(47));




