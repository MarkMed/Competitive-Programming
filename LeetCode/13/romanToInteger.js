var romanToInt = (s) => {
	const romanNumbers = new Map([
		["I", 1],
		["IV", 4],
		["V", 5],
		["IX", 9],
		["X", 10],
		["XL", 40],
		["L", 50],
		["XC", 90],
		["C", 100],
		["CD", 400],
		["D", 500],
		["CM", 900],
		["M", 1000]
	]);
	let result = 0;
	let i = 0
	
	while (i < s.length) {
		
		if (romanNumbers.get(s[i+1]) && (romanNumbers.get(s[i]) < romanNumbers.get(s[i+1]))) {
			result += romanNumbers.get(s[i] + s[i+1])
			i += 2;
		}
		else {
			result += romanNumbers.get(s[i]);
			i++
		}
	}

	return result
};