var shuffle = (nums, n) => {
	for(let i=n; i<nums.length-1; i++){
		nums.splice((i - (nums.length-1 - i)), 0, nums[i])
		nums.splice(i+1, 1);
	}
	return nums
};