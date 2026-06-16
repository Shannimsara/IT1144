function changeText() {
    alert("submit successfull !");
    let title =document.getElementById("name").value;
    document.getElementById("java-2").innerText=title+" , your record submit successfully !" ;
   
}
function changetext2() {
    alert("sign-in successfull !"); 
    document.getElementById("java-heading").innerHTML=" Sign-in Successfull !" ;
    document.getElementById("java-heading").style.color="green";
}

let images=[
    "part3.jpg",
    "ss1.jpg",
    "part1.jpg"
];

let index=0;
setInterval(function(){
    index++;

    if(index>=images.length){
        index=0;
    }

    document.getElementById("slideshow").src=images[index];
},2000);



let images1=[
    "img1.avif",
    "b1.jpg",
    "b12.jpg"
];

let index1=0;
setInterval(function(){
    index1++;

    if(index1>=images1.length){
        index1=0;
    }

    document.getElementById("card-1").src=images1[index1];
},2000);

let images2=[
    "img2.avif",
    "b2.jpg",
    "b11.jpg"
];

let index2=0;
setInterval(function(){
    index2++;

    if(index2>=images2.length){
        index2=0;
    }

    document.getElementById("card-2").src=images2[index2];
},1800);

let images3=[
    "img3.jpg",
    "b3.jpg",
    "b10.jpg",
    "b4.jpg"
];

let index3=0;
setInterval(function(){
    index3++;

    if(index3>=images3.length){
        index3=0;
    }

    document.getElementById("card-3").src=images3[index3];
},1600);



