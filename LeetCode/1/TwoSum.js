var twoSum = (nums, target) => {
	let indicesSolution = [-1, -1]
	let leftPointer = 0
	let rightPointer = nums.length - 1;
	let numsMap = new Map();
	let numsCopy = [...nums];

	for(let [indX, numb] of nums.entries()){
		let indexList = numsMap.get(numb)
		if (!indexList) {
			numsMap.set(numb, [indX]);
		}
		else {
			indexList.push(indX)
			numsMap.set(numb, indexList);

		}
	}
	numsCopy.sort(function(a, b){return a-b});

	while (leftPointer < rightPointer) {
		let twoSum = numsCopy[leftPointer] + numsCopy[rightPointer];
		if (twoSum > target) {
			rightPointer--			 
		}
		else if (twoSum < target) {
			leftPointer++
		}
		else{
			indicesSolution[0] = numsMap.get(numsCopy[leftPointer])[0];
			numsMap.get(numsCopy[leftPointer])[0] = -1
			indicesSolution[1] = numsMap.get(numsCopy[rightPointer])[0] === -1 ? numsMap.get(numsCopy[rightPointer])[1] : numsMap.get(numsCopy[rightPointer])[0];
			break
		}
	}

	return indicesSolution
};