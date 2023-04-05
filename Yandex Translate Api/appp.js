const wordPlace = document.getElementById("word");
const languagePlace = document.getElementById("language");
const transleteobject = new Transletee(wordPlace.value,languagePlace.value);
const uiiobject = new UII();





eventListeners();


function eventListeners(){
    document.getElementById("translete-form").addEventListener("submit",transletee);
    languagePlace.onchange = function(){

        uiiobject.changeUı(languagePlace.value,languagePlace.options[this.languagePlace.selectedIndex]);

    }

}

function transletee(){

    transleteobject.changeAllParameters(wordPlace.value,languagePlace.value);

    transleteobject.transleteall()
    .then(result => uiiobject.changeoutputwords(result))
    .catch(err => console.log(err));

    
}