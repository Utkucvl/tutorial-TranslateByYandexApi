function Translete(word,language){
    this.apiKey = "apikeyolsaydıkoyardık";
    this.word = word ;
    this.language = language;
    this.xhr = new XMLHttpRequest();
}


Translete.prototype.transeleteallwords = function(callback){

    const endpoint = `asdasdasdasda?key=${this.apikey}?text=${this.word}?lang=${this.language}`

    this.xhr.open("Get",endpoint);

    this.xhr.onload= () => {

        if(this.xhr.status===200){
            const  json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];

            callback(null,text);
        }
        else{
            callback("Bir hata var " , null);
        }

    }

    this.xhr.send();

}

Translete.prototype.changeParameters = function(newWord , newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}