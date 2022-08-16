//check login status
var address= location.href;
var token;

address= address.split("?");
if(address.length>1){
    document.getElementById("main").style.display= "none";
    document.getElementById("afterLogin").style.display= "block";
    address= address[1].split("=");
    token= address[1];
    
    $.ajax({
        url:"https://id.nycu.edu.tw/o/token/",
        method:"post",
        data: {
            grant_type: authorization_code,
            code: token,
            client_id: AnZOBlV6zutiSDpgG7GyTWlvQaEZ1TiXC6hNSEW8,
            client_secret: Weg7a7ILTJON5ejEziZYZg8kDjdNmdtCEGSzWJtCPOhpG3PHPOy8twHF3PMmqrUaUazLaKyPhsO3fd9GRtly9t0VdhJnhdlc5ht73ZtenQL2dlFhDRfWFE5fvEVcAHG1,
            redirect_uri: "https://weng-john.github.io/findChild/"
        },
        success: function(res){
            console.log('ajax result:')
            console.log(res)
        }
    })
}


//get email address
//addEventListener.