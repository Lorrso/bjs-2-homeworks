"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x;
	let xFirst;
	let xSecond;
	let d = b ** 2 - 4 * a * c;

	switch (d) {
		case d < 0:
			arr = [];
			break;

		case d = 0:
			x = -b / (2 * a);
			arr.push(x);
			break;

		case d > 0:
			xFirst = (-b + Math.sqrt(d)) / (2 * a);
			arr.push(xFirst);
			xSecond = (-b - Math.sqrt(d)) / (2 * a);
			arr.push(xSecond);
			break;
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent ** -100 / 12;
	let s = amount - contribution;
	let n = countMonths;
	let payment = (s * (p + (p / (((1 + p) ** n) - 1)))) * n;
	payment = payment.toFixed(2);
	typeof payment === "number";

	return payment;
}