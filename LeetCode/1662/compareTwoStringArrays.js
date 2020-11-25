const arrayStringsAreEqual = (word1, word2) => {
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