const getMaximumGenerated = (n) => {
    let result = 0;

    if(n <= 2){
        result = (n === 2)?(1):(n)
    }
    else{
        const generatedArray = new Array(n+1)
        
        generatedArray[0] = 0;
        generatedArray[1] = 1;
        for(let i = 0; (2 * i + 1)<=n; i++){
            let newGreatestValue;

            generatedArray[2 * i] = generatedArray[i];
            generatedArray[2 * i + 1] = generatedArray[i] + generatedArray[i + 1];
            newGreatestValue = Math.max(generatedArray[2 * i], generatedArray[2 * i + 1]);
            if (result < newGreatestValue){
                result = newGreatestValue;
            }
        }
    }

    return result
};