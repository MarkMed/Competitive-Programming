function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let concatedWord1 = "";
    let concatedWord2 = "";

    for(let word of word1){
        concatedWord1 += word
    }
    for(let word of word2){
        concatedWord2 += word
    }

    return concatedWord1 === concatedWord2
};