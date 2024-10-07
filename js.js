
const tri=document.getElementById("trii");
const btn=document.getElementById("click");
const ktri=document.getElementById("ktri");
const btn2=document.getElementsByClassName("btn2");
const content=document.getElementById("content")
console.log(content)
console.log(tri)
content.style.marginTop="5rem"
function clickm(){
    tri.style.left="0";
    ktri.style.display="block";
    ktri.style.marginTop="15rem"
    content.style.marginTop="0rem";
}
function clickoff(){
    tri.style.left="-100%";
    ktri.style.display="none";
    content.style.marginTop="5rem"
}

