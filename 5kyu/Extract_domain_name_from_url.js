function domainName(url){
    //your code here
    let regexp = /\/\/www\.(.*?)\.|\/\/(.*?)\.|www\.(.*?)\./;
    let matches= url.match(regexp);
    if(matches) {
      if(matches[1])
        return matches[1];
      if(matches[2])
        return(matches[2]);
      if(matches[3])
        return(matches[3]);
    }
    else {
      let regexp2 = /[^\.]*/;
      let matches2= url.match(regexp2);
      return(matches2[0]);
    }
  }