function parseCount(string) {
	const number = Number.parseFloat(string);
	if (Number.isNaN(number)) {
		throw new Error("Невалидное значение");
	}
	return number;
}

function validateCount(string) {
	try {
		const number = parseCount(string);
		return number;
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		return this.perimeter = this.a + this.b + this.c;
	}
	get area() {
		return this.area = +(Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - a) * ((this.perimeter / 2) - b) * ((this.perimeter / 2) - c))).toFixed(3);
	}
}


function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}