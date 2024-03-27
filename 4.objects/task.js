function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		console.log("Добавление оценок невозможно. Студент отчислен.");
		return;
	}
	this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) {
        return 0;
    }
	const sum = this.marks.reduce((acc, marks) => acc + marks, 0);
	const avg = sum / this.marks.length;
	return avg;
}
Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}