var minCost = (s, cost) => {
	let costResult = 0;

	for (let i = 0; i < s.length; i++){
		let currentLetter = s[i]
		let nextLetter = s[i+1];
		if (nextLetter && currentLetter === nextLetter) {
			costResult += (cost[i] < cost[i+1]) ? cost[i] : cost[i+1];
		}
	}
	
	return costResult
}
