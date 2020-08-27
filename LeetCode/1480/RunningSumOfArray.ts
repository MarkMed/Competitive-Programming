function runningSum(nums: number[]): number[] {
	let resultArray = nums;
	let sumResult = 0;
	for(let [indX, numb] of nums.entries()){
		sumResult += numb;
		resultArray[indX] = sumResult;
	}
	return resultArray
};