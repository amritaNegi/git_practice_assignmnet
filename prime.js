let a=5;
let factor=0;
for(let i=1; i<=a; i++){
if(a%i==0){
factor++;
}
}

if(factor==1){
console.log("Prime");
}else{
console.log("Not Prime");
}


