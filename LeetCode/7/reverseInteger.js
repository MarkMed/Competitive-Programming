var reverse = (x) => {
	const numberInString = x + "";
	let result = "";

	for( let i = numberInString.length - 1; i >= 0; i--) {
		if (numberInString[i] === "-") {
			result = numberInString[i] + result;
		} 
		else {
			result += numberInString[i];
		}
	}

	result -=  0;

	if ( (result < -Math.pow(2,31)) || (result > Math.pow(2,31) -1) ) {
		return 0
	}

	return (result)
	
};