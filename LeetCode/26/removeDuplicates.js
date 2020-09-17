var removeDuplicates = (nums) => {
	let currentIndX = 0;
	while (currentIndX < nums.length) {
		let compareIndX = currentIndX+1;
        if ((nums[compareIndX] || nums[compareIndX] === 0) && nums[currentIndX] === nums[compareIndX]) {
            nums.splice(compareIndX, 1);
        }
        else {
            currentIndX++
        }
	}

	return nums.length
};