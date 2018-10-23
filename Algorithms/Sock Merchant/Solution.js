// Problem: https://www.hackerrank.com/challenges/sock-merchant/

function sockMerchant(n, ar) {
    let count = 0;
    for(let i = ar.length - 1; i >= 0; i--){
        let first = ar[0]
        ar.shift();

        if(ar.indexOf(first) >= 0){
            ar.splice(ar.indexOf(first), 1)
            count++;
        }
    }
    return count
}
