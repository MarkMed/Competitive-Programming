var isNumber = (s) => {
    if (s && s != " ") {
        const intifyString = s -1
        if (intifyString === 0) {
            return true    
        }
        return !!(intifyString)
    }
    else {
         return false
    }
};