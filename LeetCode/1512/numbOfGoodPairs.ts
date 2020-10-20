function numIdenticalPairs(nums: number[]): number {
	let totalMatches = 0;
	let numsMap = new Map;

	const fact = (num: number) => {
		let result = 1;
		for (let i=1; i<=num;i++){
			result = result * i;
		}
		return result;
	}
	const calcCombinations = (itemAmount: number, itemsGrouping: number) =>  ((fact(itemAmount))/(fact(itemAmount - itemsGrouping)*fact(itemsGrouping)))

	for(let i = 0; i < nums.length; i++){
		if(numsMap.get(nums[i])){
			numsMap.get(nums[i]).push(i)
		}
		else{
			numsMap.set(nums[i], [i])
		}
	}

	numsMap.forEach(item => {
		if(item.length > 1){
			totalMatches += calcCombinations(item.length, 2)
		}
	});
	return totalMatches
};
/*
function numIdenticalPairs(nums: number[]): number {
	let totalMatches = 0;
	for(let i = 0; i < nums.length; i++){
		let currentNumb = nums[i];
		for(let j = i+1; j < nums.length; j++){
			let numbToCompare = nums[j];
			if(currentNumb === numbToCompare){
				totalMatches++
			}
		}
	}
	return totalMatches
};
*/