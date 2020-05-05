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

function goHomePage()
{
	location.replace("homePage.html");
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

function getQuerystring(key, default_)
{
  if (default_==null) default_="";
  key = key.replace(/[\\[]/,"\\\\\\[").replace(/[\\]]/,"\\\\\\]");
  var regex = new RegExp("[\\\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
}

function isNumeric(num){
  return !isNaN(num)
}

function goToPayment()
{
	var noOfSeats=document.getElementById("Numseats").value;
	var ns=parseInt(noOfSeats);
	if(noOfSeats=="" || ns<=0 )
	{
		window.alert("Please enter correct number of seats");
		return false;
	}
	var theatre=document.getElementById("theatre").value;
	var time=document.getElementById("time").value;
	var movie=getQuerystring("movie");
	window.document.location="paymentArea.html"+"?movie="+movie+"&seats="+noOfSeats+"&theatre="+theatre+"&time="+time;
	return true;
}


function goToTicket()
{
	var name=document.getElementById("nameOnCard").value;
	var cnum=document.getElementById("cardNumber").value;
	var exp=document.getElementById("expData").value;
	var cvv=document.getElementById("cvv").value;
	if(name=="" || cnum=="" || exp=="" || cvv=="") 
	{
		window.alert("Please fill full form");
		return false;
	}
	else if(isNaN(cnum) || isNaN(exp) || isNaN(cvv))
	{
		window.alert("Values should be numeric");
		return false;
	}
	else if(parseInt(cvv)<100|| parseInt(cvv)>999)
	{
		window.alert("Please enter correct cvv");
		return false;
	}
	else if(parseInt(exp)<1000|| parseInt(cvv)>9999)
	{
		window.alert("Please enter correct Expiration date");
		return false;
	}
	else if(cnum.length<12||cnum.length>12)
	{
		window.alert("Please enter correct card number");
		return false;
	}
	
	var movie=getQuerystring("movie");
	var noOfSeats=getQuerystring("seats");
	var theatre=getQuerystring("theatre");
	var time=getQuerystring("time");
	window.document.location="Ticket.html"+"?movie="+movie+"&seats="+noOfSeats+"&theatre="+theatre+"&time="+time+"&name="+name;
	return true;
}


function goToSeating()
{
	var mvn=document.getElementById("mvn").innerHTML;
	window.document.location="seating.html?movie="+mvn;
}

function showData()
{
	var movie=getQuerystring("movie");
	var noOfSeats=getQuerystring("seats");
	var theatre=getQuerystring("theatre");
	var time=getQuerystring("time");
	var name=getQuerystring("name");
	var price=parseInt(noOfSeats)*150;
	document.getElementById("name").innerHTML="Name : "+name;
	document.getElementById("movie").innerHTML="Movie Name : "+movie;
	document.getElementById("seats").innerHTML="Number of Seats : "+noOfSeats;
	document.getElementById("theatre").innerHTML="Theatre : "+theatre;
	document.getElementById("time").innerHTML="Time : "+time;
	document.getElementById("price").innerHTML="Total paid : "+price;
}