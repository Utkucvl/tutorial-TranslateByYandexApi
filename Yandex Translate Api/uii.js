class UII {
    constructor(){
        const outputImage = document.getElementById("outputImage");
        const outputLanguage = document.getElementById("outputLanguage");
        const outputWord = document.getElementById("outputWord");

    }

    changeUı(imagesource,text){
        this.outputImage.src = `images/${imagesource}.png`;
        this.outputLanguage.textContent = text;
        

    }
    changeResult(result){
        this.outputWord.textContent = result;
    }
}