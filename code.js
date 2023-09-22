function divideAndConquerSum(a) {
    if(a.length == 1){
        return a[0];
    } else if(a.length == 0){
        return 0;
    } else if(a.length == 2) {
        return (divideAndConquerSum(a.slice(0, 1)) + divideAndConquerSum(a.slice(1,2))) 
    } else
        {
            
            return (divideAndConquerSum(a.slice(0, Math.floor(a.length/3))) 
            + divideAndConquerSum(a.slice(Math.floor(a.length/3), 2 * Math.floor(a.length/3))) 
            + divideAndConquerSum(a.slice(2 * Math.floor(a.length/3), a.length)));
        }
}
