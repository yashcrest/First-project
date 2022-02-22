document.getElementById("btn1").onclick = function(){
    document.getElementById("confirm").innerHTML = "Order Placed. Check email for confirmation";
    document.getElementById("btn1").style.display= "none";
    document.getElementById("btn2").style.display = "block";
    console.log("log");
}
document.getElementById("btn2").onclick = function(){
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("confirm").innerHTML = "confirm purchase?";
    console.log("log");
}





