let num = 1;
let result = '';
while (num <= 100) {
    if (num % 3 == 0 && num % 5 == 0) {
        result += "FizzBuzz<br>";
    } else if (num % 3 == 0) {
        result += "Fizz<br>";
    } else if (num % 5 == 0) {
        result += "Buzz<br>";
    } else {
        result += num + "<br>";
    }
    num++;
}
document.write(result);