function reverse(x: number): number {
	const numberInString: string = x + "";
	let resultInString: string  = "";
	let result: number;

	for( let i = numberInString.length - 1; i >= 0; i--) {
		if (numberInString[i] === "-") {
			resultInString = numberInString[i] + resultInString;
		} 
		else {
			resultInString += numberInString[i];
		}
	}

	result = 0 - - resultInString;

	if ( (result < -Math.pow(2,31)) || (result > Math.pow(2,31) -1) ) {
		return 0
	}
	return (result)
};