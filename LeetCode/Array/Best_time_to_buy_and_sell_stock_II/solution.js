const maxProfit = (prices) => {

}


var maxProfit = function(prices) {
    let a=0;
    
    for(let i=0;i<prices.length;i++){
        if(prices[i+1] && prices[i+1]!=undefined){
            if(((prices[i]) < (prices[i+1]))){
                let buy=prices[i];
                let next=prices[i+1];
                        
                if(next-buy>0){
                    let profit=next-buy;
                    a=a+profit;
                    i++;
                    
                    if(prices[i]>prices[i-1]){
                        i--;
                    }
                }
            }
        }   
    }
return a; 
};