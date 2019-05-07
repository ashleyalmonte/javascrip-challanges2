function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}


let vowels = ['a', 'e', 'i', 'o', 'u']
function pigLatin(string) {
  str = prompt("Enter a word or a phrase")
  let a = str.substr(1)
  let b = str.charat(0)
  if(!(vowels.includes(b))){
    return a + b + "ay"
  } else{
    return str + "ay"
  }
}
