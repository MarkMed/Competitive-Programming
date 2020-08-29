var kidsWithCandies = (candies, extraCandies) => {
    let maxCandiesNumber = 0;
    let kidsWithHighCandiesAmount = new Array(candies.length);
    for (const candiesNumber of candies) {
        maxCandiesNumber = (candiesNumber > maxCandiesNumber) ? (candiesNumber) : (maxCandiesNumber);
    }
    for (let [indX, candiesNumber] of candies.entries()) {
        kidsWithHighCandiesAmount[indX] = ((candiesNumber + extraCandies) >= maxCandiesNumber);
    }
    return kidsWithHighCandiesAmount
};