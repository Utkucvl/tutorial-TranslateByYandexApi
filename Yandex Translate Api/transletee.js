class   Transletee {
    constructor(word,language){
        this.apikey = "apikeyolsaydıkoyardık";
        this.word = word ;
        this.language = language ;
        this.xhr = new XMLHttpRequest();

    }
    transleteall(){
        const endpoint = `asdasdasdasda?key=${this.apikey}?text=${this.word}?lang=${this.language}`;
        return new Promise((resolve,reject) => {
            fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                response.text[0];
                resolve(data);
            })
            .catch(err => reject(err))

            
        })

    }
    changeAllParameters(newWordAtAll,newLanguageAtAll){
        this.word = newWordAtAll;
        this.language = newLanguageAtAll;


    }
}