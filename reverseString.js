function reverse(str){
    let len=str.length-1;
    let str2="";
    for(let i=len;i>=0;i--){
        str2+=str[i];
    }
    console.log(str2);
}
let str="hello";
reverse(str);