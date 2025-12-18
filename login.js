let num=146;
let n=num;
let sum=0;
let r=0;
while(num>0){
    r=num%10;
    sum=sum+r;
    num=Math.floor(num/10);
}
console.log("sum of digits of number "+n+":"+sum);

