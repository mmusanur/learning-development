let start = 5;
let end = 5;
let results = 1;

if (start < end) {
  for (let i = start; i <= end; i++) {
    results = results * i;
  }
} else if (start > end) {
  for (let i = start; i >= end; i--) {
    results = results * i;
  }
} else {
  results = start;
}

console.log(results);
