function parseCount(string) {
    let number = Number.parseFloat(string);
    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(string) {
    try {
        parseFloat(string); 
        return number;
    } catch(error) {
        return Error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a > b + c) {
            throw new Error("Треугольник с такими сторонами не существует.")
        }
        this.a = a;
        this.b = b;
        this.c = c;
        this.perimeter = a + b + c;
        this.area = +(Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - a) * ((this.perimeter / 2) - b) * ((this.perimeter / 2) - c))).toFixed(3);
    }
	get perimeter() {
		return this.perimeter;
	}
    get area() {
		return this.area;
	}
}

class ErrorObject {
    constructor() {
        this.perimeter = "Ошибка! Треугольник не существует";
        this.area = "Ошибка! Треугольник не существует";
    }
    get perimeter() {
		return this.perimeter;
	}
    get area() {
		return this.area;
	}
}

function getTriangle(a, b, c) {
    try { 
        return new Triangle(a, b, c); 
    } catch (error) {
        return new ErrorObject;
    }
}