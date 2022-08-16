//check login status
var address= location.href;
var token;

address= address.split("?");
if(address.length==1){
    document.getElementById("main").style.display= "none";
    document.getElementById("afterLogin").style.display= "block";
    address= address[1].split("=");
    token= address[1];
    console.log(token);
}


//get email address
//addEventListener.