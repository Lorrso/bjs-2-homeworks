function compareArrays(arr1, arr2) {
	if (arr1 !== arr2) return false;
	return arr1.every((value, index) => {
		return arr1[index] === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	let result = arr.filter(user => user.gender === gender).reduce((acc, user) => acc + user.age);
	if (result.length === 0) return 0;
	const avgAge = result / result.length;
	return avgAge;
}