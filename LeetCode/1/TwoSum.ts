function twoSum(nums: number[], target: number): number[] {
	let indicesSolution = [-1, -1]
	let leftPointer = 0
	let rightPointer = nums.length - 1;
	let numsCopy = [...nums];

	numsCopy.sort(function(a, b){return a-b});

	while (leftPointer < rightPointer) {
		let twoSum = numsCopy[leftPointer] + numsCopy[rightPointer];
		if (twoSum > target) {
			rightPointer--			 
		}
        else if (twoSum < target) {
			leftPointer++
		}
		else {
			break
		}
	}
	for (let [indX, numb] of nums.entries()) {
		if ( numb === numsCopy[leftPointer]) {
			indicesSolution[0] = indX
			leftPointer = null
		}
		else {
			if (numb === numsCopy[rightPointer]) {
				indicesSolution[1] = indX
			}
		}
	} 

	return indicesSolution
};