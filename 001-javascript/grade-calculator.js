let subject1 = 99;
let subject2 = 77;
let subject3 = 99;

if (
  subject1 < 0 ||
  subject1 > 100 ||
  subject2 < 0 ||
  subject2 > 100 ||
  subject3 < 0 ||
  subject3 > 100
) {
  console.log("Your number is Wrong");
} else if (subject1 < 33 || subject2 < 33 || subject3 < 33) {
  console.log("You are fail");
} else {
  let average = (subject1 + subject2 + subject3) / 3;
  console.log(average);
  if (average >= 80) {
    console.log(" A+" + " You are doing good ");
  } else if (average >= 70) {
    console.log("A");
  } else if (average >= 60) {
    console.log("A-");
  } else if (average >= 50) {
    console.log("B+");
  } else if (average > 30) {
    console.log(" C" + " Pass but need improve");
  }
}
