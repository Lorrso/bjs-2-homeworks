function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((value, index) => {
		return value === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.age);
	if (result.length === 0) return 0;
	const averageAge = result / result.length;
	return averageAge;
}