function rowSumOddNumbers(n) {
	// TODO
    if(n==1)
        return 1;
    else {
        let oddStart = 0;
        let sum = 0;
        for(i=1;i<n;i++)
            oddStart += i;
        
        oddStart = ((oddStart+1) * 2) - 1;
        
        for(i=0;i<n;i++)
            sum += oddStart + (i*2);
        
        return sum;
    }
}