var restoreString = (s, indices) => {
	const size = indices.length;
	let ordererdCharsByIndex= new Array(size);
	for(let i = 0; i < size; i++){
		ordererdCharsByIndex[indices[i]] = s[i]
	}
	
	return ordererdCharsByIndex.join("");
};