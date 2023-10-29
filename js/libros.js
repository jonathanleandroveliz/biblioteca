var aplic = angular.module('buscarLibro', []);
aplic.controller('buscarCtrl', function($scope,$http){

    $scope.getBooks = function(){
        document.getElementById('salida').innerHTML="";
        $http.get("http://openlibrary.org/search.json?q="
        +document.getElementById("entrada").value)
        .then(function (Response){
            console.log(Response);
            if(!Response.data.docs.length )
            {
                document.getElementById("salida").innerHTML+="<h2>"+"No se encontraron Libros"+"</h2>";
            }
            else
            {
                for(var i=0; i<10; i++){
                    document.getElementById("salida").innerHTML+="<h2>"+
                    Response.data.docs[i].title+"</h2>"+Response.data.docs[i].author_name[0]+
                    "<p>"+Response.data.docs[i].first_publish_year+"</p>"+
                    "<br><img src='http://covers.openlibrary.org/b/isbn/"
                    +Response.data.docs[i].isbn[i]+"-M.jpg'><br>";
                }
            }
            
        })
    }
});


/* function getBooks(){
     document.getElementById('salida').innerHTML="";
    fetch("http://openlibrary.org/search.json?q="
    +document.getElementById("entrada").value)
    .then(a => a.json())
    .then(Response => {for(var i=0; i<10; i++){
                document.getElementById("salida").innerHTML+="<h2>"+
                Response.docs[i].title+"</h2>"+Response.docs[i].author_name[0]+"<br><img src='http://covers.openlibrary.org/b/isbn/"
                +Response.docs[i].isbn[0]+"-M.jpg'><br>";     
            }
    })
} */

let previousTitle = document.title;

window.addEventListener('blur', ()=>{
    previousTitle = document.title;
    document.title = "Regresa pronto 😥";

})

window.addEventListener('focus', ()=>{
    document.title = previousTitle;
})