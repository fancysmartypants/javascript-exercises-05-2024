const sumAll = function(a,b) {
    let ans=0;
    if ((a<0)||(b<0)||(typeof(a)!="number")||(typeof(b)!="number")){
        return `ERROR`;
    }else if (a>b){
        let num1=b;
        let num2=a;
        for ( let i=num1; i<=num2; i++){
            ans+=i;
        }
        return ans;
    }else{
        for (let i=a; i<=b; i++){
            ans+=i;
        }
        return ans;
    }

};

// Do not edit below this line
module.exports = sumAll;
