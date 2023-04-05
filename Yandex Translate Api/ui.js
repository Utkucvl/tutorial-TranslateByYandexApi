function UI(){
    this.outputimage = document.getElementById("outputImage");
    this.outputword = document.getElementById("outputWord");
    this.outputlanguage = document.getElementById("outputLanguage");

    this.languagelist = document.getElementById("language");
}

UI.prototype.changelanguageandicon = function(){


    this.outputimage.src = `images/${this.languagelist.value}.png`;
    this.outputlanguage.innerHTML = this.languagelist.options[this.languagelist.selectedIndex];

}

UI.prototype.changeoutputwords = function(word){
    this.outputword.textContent = word ;
}