let a=[5,7,0,2,6,0,3,8];
let n=a.length;
let c=0;
for(let i=0;i<n;i++){
    if(a[i]!=0){
       a[c]=a[i];
       c++;
    }
}
for(let j=c;j<n;j++){
    a[c]=0;
    c++;
}

console.log(a);