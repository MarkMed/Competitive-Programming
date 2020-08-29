function restoreString(s: string, indices: number[]): string {
	const size = indices.length;
	let ordererdCharsByIndex: string[] = new Array(size);
	for(let i = 0; i < size; i++){
		ordererdCharsByIndex[indices[i]] = s[i]
	}
	return ordererdCharsByIndex.join("");
};