eventListeners();



function eventListeners(){
     document.getElementById("translete-form").addEventListener("submit",transleteWord)

     document.getElementById("language").onchange = function(){

        uı.changelanguageandicon();
     }


}

const translete = new Translete(document.getElementById("word").value , document.getElementById("language").value);
const uı = new UI();


function transleteWord(e){

    translete.changeParameters(document.getElementById("word").value , document.getElementById("language").value)

    translete.transeleteallwords(function(err,response){
        if(err === null ){
           uı.changeoutputwords(response); 

        }
        else{
            console.log(err);
        }
    })

    e.preventDefault();
}