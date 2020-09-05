var diagonalSum = (mat) => {
	let totalSum = 0;
	let positionToJump = -1;

	for (let [indX, matrixRow] of mat.entries()){
		if (indX < (Math.round(mat.length / 2))) {
			positionToJump++
		}
		else if (indX > (Math.round(mat.length / 2))){
			positionToJump--
		}
		if ((0 + positionToJump) === (matrixRow.length-1 - positionToJump)) {
			totalSum += matrixRow[0 + positionToJump];
			positionToJump--
		}
		else{
			totalSum += (matrixRow[0 + positionToJump] + matrixRow[matrixRow.length-1 - positionToJump])
		}
	}

	return totalSum
};