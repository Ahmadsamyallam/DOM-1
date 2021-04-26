




var imgs=document.querySelectorAll(".img-fluid")
var lightboxcontainer=document.getElementById("lightboxcontainer")
var closeicon=document.getElementById("close")
var lightboxitem=document.getElementById("lightboxitem")

for (var i=0;i<imgs.length;i++)

{
    imgs[i].addEventListener("click",function(e){
       
       lightboxcontainer.style.display="flex";
       var imgSrc=e.target.src;          // كان ممكن من الاول نحط e.target.src بس احنا ساوينها ب imgSrc


       lightboxitem.style.backgroundImage=`URL(${imgSrc})`
       

    })



}

closeicon.addEventListener("click",function(){

lightboxcontainer.style.display="none"

})
 





var myHttp = new XMLHttpRequest();
var allMovies ;

myHttp.open("GET","https://api.themoviedb.org/3/trending/movie/day?api_key=4aff823a7ed7c1ac78cb54bc6d268b77");
myHttp.send();

myHttp.addEventListener("readystatechange",function(){

if(myHttp.readyState == 4 && myHttp.status == 200 )
{
    allMovies = JSON.parse(myHttp.response);
    console.log(myHttp.response);
    displayMovies();
}

})


function displayMovies(){
var cartona = ``;
for (var i=0; i < allMovies.length; i++)
{
    cartona +=
    `
    <div class="col-md-3">
    <h3>Lorem, ipsum dolor.</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, quibusdam.</p>
</div>
    `;
}

   document.getElementById("rowData").innerHTML = cartona;
}



function  welcome(username="defult", Age=27, salary=4555 )
{
    alert(`welcome ${username} ur Age is ${Age} ur salary is ${salary}`)
}
welcome("ahmad",255555,545)