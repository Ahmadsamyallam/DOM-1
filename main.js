


var httpRequest = new XMLHttpRequest();   // new بتعمل نسخه جديده من ال xmlhttprequest
var posts=[];

httpRequest.open("GET","https://jsonplaceholder.typicode.com/photos")
httpRequest.send();



httpRequest.addEventListener("readystatechange",function(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
    {
       posts = JSON.parse(httpRequest.response);  
       displayPosts()

    }
})


function displayPosts()
{
    var postsContainer = ``;
    for ( var i=0 ;i<posts.length; i++)
    {
        postsContainer+= 
        `<div class="col-md-3">
        <div>
            <img src="${posts[i].url}" class="w-100">
            <h1>${posts[i].id}</h1>
            <h3>${posts[i].title}</h3>
            <p>${posts[i].body}</p>
        </div>
        </div>`
    }
    document.getElementById("postsRow").innerHTML = postsContainer
}
