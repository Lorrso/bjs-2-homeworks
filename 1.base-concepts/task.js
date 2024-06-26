"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d > 0) {
		let xFirst = (-b + Math.sqrt(d)) / (2 * a);
		arr.push(xFirst);
		let xSecond = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(xSecond);
	} else if (d == 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else {
		arr = [];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let n = countMonths;
	let p = percent / 12 * 0.01;
	let s = amount - contribution;
	let totalMortgage = (s * (p + (p / (((1 + p) ** n) - 1)))) * n;
	totalMortgage = totalMortgage.toFixed(2);
	totalMortgage = Number(totalMortgage);

	return totalMortgage;
}