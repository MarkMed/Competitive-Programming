function searchInsert(nums: number[], target: number): number {
	let indexToPlace = 0;
	while (indexToPlace < nums.length && nums[indexToPlace] < target){
		indexToPlace++
	} 
	return indexToPlace
};