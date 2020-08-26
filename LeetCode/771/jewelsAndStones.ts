function numJewelsInStones(J: string, S: string): number {
	let myMap = new Map([]);
	let totalJewels = 0;
	for(let letter of J){
		myMap.set(letter, true)
	}
	for(let letter of S){
		if(myMap.has(letter)){
			totalJewels++;
		}
	}
	return totalJewels;
};