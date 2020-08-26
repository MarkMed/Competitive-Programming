var toLowerCase = str => {
    let lowerCaseString = ""; 
    for(let letter of str){
        if(letter >= "A" && letter <= "Z"){
            lowerCaseString += String.fromCharCode(letter.charCodeAt(0) + 32);
        }
        else{
            lowerCaseString += letter
        }
    }
    return lowerCaseString;
};