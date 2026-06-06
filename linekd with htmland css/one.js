//select elements
const title =document.getElementById("title");
const botton =document.getElementById("change");

//add click event
Button.addEventListener("click",function (){
	//change text
	title.textContent="Button clicked !";
	//change color
	title.Style.color="red"
});