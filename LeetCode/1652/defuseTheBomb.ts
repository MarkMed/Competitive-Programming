function decrypt(code: number[], k: number): number[] {
    const result:number[] = new Array(code.length);
    
    for(let i = 0; i<code.length; i++){
        let acumul = 0;
        if(k > 0){
            for(let j=1; j<=k; j++){
                let indX = i+j;
    
                if(!(indX < code.length)){
                    indX -= code.length
                }
                acumul += code[indX]
            }

        }
        else if(k<0){
            for(let j=-1; j>=k; j--){
                let indX = i+j;
                if(indX < 0){
                    indX = code.length + indX
                }
                acumul += code[indX]
            }

        }
        result[i] = acumul
    }

    return result
};