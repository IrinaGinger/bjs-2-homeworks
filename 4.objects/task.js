let student1 = new Student('Иван', 'м', 20);
let student2 = new Student('Алексей', 'м', 19);
let student3 = new Student('Ольга', 'ж', 21);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks = [...this.marks, ...marks];
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') && (this.marks.length != 0)) {
    const initialValue = 0;
    let sum = this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sum / this.marks.length;
  }
  else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
 