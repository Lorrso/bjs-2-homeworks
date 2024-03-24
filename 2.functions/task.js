function getArrayParams(...arr) {
	if (arr.length === 0) return 0;
	let min = arr[0];
	let max = arr[0];
	let sum;
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		} else {
			continue;
		}
		if (max < arr[i]) {
			max = arr[i];
		} else {
			continue;
		}
		sum += arr[i];
	}
	const avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sum = arr[0];
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let min = arr[0];
	let max = arr[0];
	const difference = max - min;
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		} else {
			continue;
		}
		if (max < arr[i]) {
			max = arr[i];
		} else {
			continue;
		}
	}
	return difference;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let difference = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}

		if (sumEvenElement > sumOddElement) {
			difference = sumEvenElement - sumOddElement;
		} else {
			difference = sumOddElement - sumEvenElement;
		}
	}
	return difference;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	const avg = sumEvenElement / countEvenElement;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] / 2) {
			sumEvenElement += arr[i];
			countEvenElement++;
		} else {
			continue;
		}
		avg = avg.toFixed(2);
		avg = Number(avg);
	}
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const workerResult = func(...arrOfArr[i]);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		} else {
			continue;
		}
	}
	return maxWorkerResult;
}