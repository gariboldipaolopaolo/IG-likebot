const next = document.querySelector('a.coreSpriteRightPaginationArrow');//seleziono il bottone prossimo post

function likePost(random) {
    const like = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button'); //seleziono il bottone like
    if(like){
        console.log('click\n');
        like.click();
    }
    next.click();
    console.log(random+' miliseconds\n');
}

let time = (flag) => {
    setTimeout(toTrue(flag),300000); //imposto il flag a true dopo 30 minuti
}

let toTrue = (flag) => {
    flag = true;
}

(function loop() {
    let flag = false; //flag che ci consenmte di tracciare il timer
    time(flag);

    if(flag) //se il flag è true e quindi è passata mezz'ora esco dalla funzione
        return;

    var min = 10000; // min 10 secondi
    var max = 20000; // max 20 secondi
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    setTimeout(function() {
        likePost(random);
        loop();  //richiamo ricorsivamente la stessa funzione
    }, random);
}());