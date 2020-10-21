const defangIPaddr = (address) => {
	let result = "";
	for (let letter of address){
		if (letter === "."){
			result += "[.]";
		}
		else {
			result += letter;
		}
	}
	return result
};