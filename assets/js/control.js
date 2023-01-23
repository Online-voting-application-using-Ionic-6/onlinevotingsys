function display(){
	// alert();
	var x = document.getElementById("select1").value;
	if (x=="a") {
		// window.location.assign("./login/login.page.html");
		document.getElementById("admin_login").style.display="block";
		document.getElementById("voter_login").style.display = "none";
	}else if(x=="v"){
		document.getElementById("voter_login").style.display = "block";
		document.getElementById("admin_login").style.display="none";
	}
}
function AH(){
	// var z = document.getElementById("admin-password").value;
	var z = document.getElementById("admin-password").value;
	
	// alert("hii");
	if (z=="") {
		document.getElementById("password-empty-admin").style.display="block";
	}else
		document.getElementById("password-empty-admin").style.display="none";

}
function VH(){
	var y = document.getElementById("voter-password").value;
	if(y=="")
		document.getElementById("password-empty-voter").style.display="block";
	else
		document.getElementById("password-empty-voter").style.display="none";
}

// function ClickMe(){
// 	document.getElementById("d1").style.display = "block";
// }