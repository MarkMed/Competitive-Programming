var numJewelsInStones = (J, S) => {
    let myMap = new Map([]);
	let totalJewels = 0
	for(letter of J){
		myMap.set(letter, true)
	}
	for(letter of S){
		if(myMap.has(letter)){
			totalJewels++;
		}
	}
	return totalJewels;
}