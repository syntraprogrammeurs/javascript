var alleBMW = document.getElementsByClassName("bmw");
/*var result = document.getElementsByClassName("bmw");*/
var result="";
for(var i=0, len=alleBMW.length;i<len; i=i+1){
    result += "\n " + alleBMW[i].textContent;
}
document.getElementById("resultArea").value = result;