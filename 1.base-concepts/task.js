"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x;
	let xFirst;
	let xSecond;
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		arr = [];
	} else if (d = 0) {
		x = -b / (2 * a);
		arr.push(x);
	} else if (d > 0) {
		xFirst = (-b + Math.sqrt(d)) / (2 * a);
		arr.push(xFirst);
		xSecond = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(xSecond);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = (percent / 12) ** -100;
	p = p.toFixed(2);
	typeof p === "number";
	let s = amount - contribution;
	let n = countMonths;
	let totalMortgage = (s * (p + (p / (((1 + p) ** n) - 1)))) * n;
	totalMortgage = totalMortgage.toFixed(2);
	typeof totalMortgage === "number";

	return totalMortgage;
}