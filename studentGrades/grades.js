const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
scores.sort(function(a, b){return a-b})
console.log(scores[0])
scores.sort(function(a, b){return b-a})
console.log(scores[0])
const grades = {
  a:0,
  b:0,
  c:0,
  d:0,
  f:0
}

for (let i = 0; i < scores.length; i++) {
  const grade = scores[i];
  if (grade > 90) {
    grades.a++
  }
  if(grade > 80 && grade < 90) {
    grades.b++
  }
  if(grade > 70 && grade < 80) {
    grades.c++
  }
  if(grade > 60 && grade < 70) {
    grades.d++
  }
  if(grade > 50 && grade < 60) {
    grades.f++
  }
}
console.info(grades)
// Which grade had the most students achieve it? Use an if statment,
// and a currentGradeCount variable, in your for..in loop to see if the current
// grade's value is higher than the last one.
// Which grade had the fewest students achieve it?

