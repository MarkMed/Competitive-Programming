var longestCommonPrefix = (strs) => {
	let stringResult = "";
	let charPosition = 0;

	while (strs[0] && charPosition < strs[0].length ) {
		let wordPosition = 1;
		const candidateCharToCompare = strs[0][charPosition]
		while (wordPosition < strs.length) {
			let currentChar = strs[wordPosition][charPosition];
			if (candidateCharToCompare != currentChar) {
				return stringResult
			}
			else {
				wordPosition++
			}
		}
		if (wordPosition === strs.length) {
			stringResult += strs[wordPosition-1][charPosition]
		}
		charPosition++
	}

	return stringResult
};