const searchInsert = (nums, target) => {
	let indexToPlace = 0;
	while (indexToPlace < nums.length && nums[indexToPlace] < target){
		indexToPlace++
	} 
	return indexToPlace
};