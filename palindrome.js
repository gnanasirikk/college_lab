function palindrome(str){
    let right=str.length-1;
    let left=0;
    let flag=0;
    while(left!=right){
        if(str[left]==str[right]){
            flag=1;
        }
        else{
            flag=0;
            break;
        }
        
        left++;
        right--;
    }
    if(flag==1){
        console.log("palindrome");
    }
    else if(flag==0){
        console.log("not palindrome");
    }
}
palindrome("madam");