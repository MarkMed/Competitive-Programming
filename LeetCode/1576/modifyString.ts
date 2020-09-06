function modifyString(s: string): string {
	let stringResult = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] != "?") {
			stringResult += s[i]
		}
		else {
			let nextLetter = s[i+1];
			let letterToPut = "a";
			let prevLetterInResult = (stringResult[stringResult.length-1])?(stringResult[stringResult.length-1]):"";
			let j = 0
			while (letterToPut === prevLetterInResult || letterToPut === nextLetter) {
				j++
				letterToPut = String.fromCharCode(letterToPut.charCodeAt(0)+j);
			}

			stringResult += letterToPut;
		}
	}
	return stringResult
};