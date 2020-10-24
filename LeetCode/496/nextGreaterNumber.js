const nextGreaterElement = (nums1, nums2) => {
	let result = [];

	for (let num of nums1){
		let greaterNum = -1
		for (let i = nums2.length - 1; (i >= 0 && nums2[i] != num); i--){
			if (nums2[i] > num){
				greaterNum = nums2[i]
			}
		}
		result.push(greaterNum)
	}
	return result
};