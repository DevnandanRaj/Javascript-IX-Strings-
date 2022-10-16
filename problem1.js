let str="Given a string count the number of words in that string";
let count=0;
for(let x=0;x<=str.length-1;x++){
  if(str[x]==" "){
    count++;
  }
}
console.log(count+1);