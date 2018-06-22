function digital_root(n) {
    var s,sum=0;
    s=n;
    for(var i=0;i<n.toString().length;i++)
    {  
        sum+=(s%10);
        s=Math.floor(s/10);
    }
    if(sum >= 10)
        return digital_root(sum); 
    else
        return sum;
}