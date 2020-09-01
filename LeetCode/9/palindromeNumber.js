var isPalindrome = (x) => {
	const numbInString = x + "";
	let reversedString = "";

	for (let i = numbInString.length - 1; i >= 0; i--) {
		reversedString += numbInString[i];
	}
	return numbInString === reversedString
};