var numSpecial = (mat) => {
	let result = 0;

	for (let row = 0; row < mat.length; row++) {
		let col = 0;
		let posiblePositionMap = new Map();
		posiblePositionMap.set(row, -1);
		while (col < mat[row].length && posiblePositionMap.get(row) != -2) {
			const element = mat[row][col];
			if (element === 1) {
				if (posiblePositionMap.get(row) === -1) {
					posiblePositionMap.set(row, col);
				}
				else {
					posiblePositionMap.set(row, -2)
				}
			}
			col++
		}
		if (col === mat[row].length && posiblePositionMap.get(row) > -1) {
			let columnFound = posiblePositionMap.get(row);
			let rowToFind = 0;
			let totalSum = 0;
			while (totalSum <= 1 && rowToFind < mat.length) {
				totalSum += mat[rowToFind][columnFound]
				rowToFind++
			}
			if (totalSum === 1)	{
				result++
			}		
		}

	}

	return result
};