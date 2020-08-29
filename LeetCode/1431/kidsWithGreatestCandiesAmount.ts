function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandiesNumber: number;
    let kidsWithHighCandiesAmount: boolean[] = new Array(candies.length);
    for (const candiesNumber of candies) {
        maxCandiesNumber = (candiesNumber > maxCandiesNumber) ? (candiesNumber) : (maxCandiesNumber);
    }
    for (let [indX, candiesNumber] of candies.entries()) {
        kidsWithHighCandiesAmount[indX] = ((candiesNumber + extraCandies) >= maxCandiesNumber);
    }
    return kidsWithHighCandiesAmount
};