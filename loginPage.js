function validateRegister(){
	var username= document.getElementById("uname");
	var password= document.getElementById("pword");
	var name= document.getElementById("ne");
	var surname= document.getElementById("srname");
	var email= document.getElementById("el");
	var mobilenum= document.getElementById("mbno");
	var pincode= document.getElementById("pcode");
	var check= document.getElementById("ch");
	if(username.value.trim()==""||password.value==""||name.value==""||surname.value==""||email.value==""||mobilenum.value==""||pincode.value==""||check.checked==false){
		alert("Please fill full form");
		return false;
	}
	else
	{
		document.writeln("username :"+username.value);
		document.writeln("</br></br>name :"+name.value);
		document.writeln("</br></br>surname :"+surname.value);
		document.writeln("</br></br>email :"+email.value);
		document.writeln("</br></br>mobilenum :"+mobilenum.value);
		document.writeln("</br></br>pincode :"+pincode.value);
		return true;
	}
}

function goRegister()
{
	location.replace("register.html")
}

function goLogin()
{
	location.replace("Login.html")
}

function validateLogin()
{
	var username= document.getElementById("uname");
	var password= document.getElementById("pword");
	if(username.value.trim()==""||password.value=="")
	{
		window.alert("Please fill full form");
		return false;
	}
	else if(username.value=="anuj"||password.value=="anuj")
	{
		alert("successfully logined");
		return true;
	}
	else
	{
		alert("username/password incorrect");
		return false;
	}

}