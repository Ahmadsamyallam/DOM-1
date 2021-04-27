




var imgs=Array.from(document.querySelectorAll(".w-100"))
var lightboxcontainer=document.getElementById("lightboxcontainer")
var closeicon=document.getElementById("close")
var nexticon=document.getElementById("next")
var previcon=document.getElementById("prev")
var lightboxitem=document.getElementById("lightboxitem")
var currentIndex=0   // zero is an intialization value 


for (var i=0;i<imgs.length;i++)

{
    imgs[i].addEventListener("click",function(e){
       
       lightboxcontainer.style.display="flex";
       currentIndex = imgs.indexOf(e.target);  // currentIndex here شايل الصوره اللي عليها الدور في الظهور
       var imgSrc=e.target.src;         
       lightboxitem.style.backgroundImage=`URL(${imgSrc})`

    })
}

closeicon.addEventListener("click",function(){

lightboxcontainer.style.display="none"

})

nexticon.addEventListener("click", getNextSlide)

function getNextSlide()
{
     currentIndex++;
     if (currentIndex == imgs.length)
     {
         currentIndex = 0
     }
     var imgSrc = imgs[currentIndex].src ;
     lightboxitem.style.backgroundImage=`URL(${imgSrc})`
     

}

previcon.addEventListener("click", getPrevSlide)

function getPrevSlide()
{
currentIndex--;
if (currentIndex<0)
{
currentIndex=imgs.length-1
}
var imgSrc = imgs[currentIndex].src ;
     lightboxitem.style.backgroundImage=`URL(${imgSrc})`

}

