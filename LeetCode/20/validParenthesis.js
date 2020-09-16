const isValid = (s) => {
	let result = true;
	if (s.length < 2) {
		result = false;
	}
	let currentCharIndex = 0;
	let closeParenthesisList = new Array();
	while (result && currentCharIndex < s.length) {
		let currentChar = s[currentCharIndex]
		const expectedParenthesis = (closeParenthesisList[closeParenthesisList.length-1])
			? closeParenthesisList[closeParenthesisList.length-1]
			: undefined;
		if (currentChar != expectedParenthesis) {
			if ( currentChar === "(") {
				closeParenthesisList.push(")");
			}
			else if ( currentChar === "[") {
				closeParenthesisList.push("]");
			}
			else if ( currentChar === "{") {
				closeParenthesisList.push("}");
			}
			else {
				result = false
			}
		}
		else {
			closeParenthesisList.pop();
		}
		currentCharIndex++;
	}
	if (closeParenthesisList.length != 0) {
		return false
	}

	return result
};