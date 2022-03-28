let result=document.getElementById("result");
result.innerHTML+=1

let s= document.getElementsByClassName("btn");
s.addEventListenen("click",function(){
    result.innerHTML+=s.innerHTML;
})

function c(m){
    result.innerHTML+=m;
}