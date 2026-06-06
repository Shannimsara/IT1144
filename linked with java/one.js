const Button=document.getElementById("sub");
let bb1=document.getElementById("java");
let name=document.getElementById("text1");


Button.addEventListener("click",function(){
	alert("details recorded !");
	document.getElementById("java").style.color="green";
	bb1.textContent="register success !";
	
	if(text1===""){
		name.textContent="fill the fields";
		name.style.color="red";
	}
	
});