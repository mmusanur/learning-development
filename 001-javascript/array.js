let arr = [3, 43, 6, 9, 10, 44, 0];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (num === 0) {
    console.log(num + " is not even or odd.");
  } else if (num % 2 === 0) {
    console.log(num + " is an even number.");
  } else {
    console.log(num + " is an odd number.");
  }
}
