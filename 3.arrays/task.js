function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((value, index) => {
		return value === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	let filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) return 0;
    let result = filteredUsers.reduce((acc, user) => acc + user.age);
	const averageAge = result / filteredUsers.length;
	return averageAge;
}