/**
 * Click event on next and like button
 * @param {decimal} random random time
 */
function likePost(random) {
    const next = document.querySelector('a.coreSpriteRightPaginationArrow');//select next post button
    const like = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button'); //select like button
    if(like){
        console.log('click\n');
        like.click();
    }
    next.click();
    console.log(random+' miliseconds\n');
}

/**
 * Timer Trigger
 * @param {bool} flag flag wich will let to know us about the reached time
 */
let time = (flag) => {
    setTimeout(toTrue(flag),300000); //after 30 min, set flag to true
}

/**
 * Set to true a flag
 * @param {bool} flag flag wich will let to know us about the reached time
 */
let toTrue = (flag) => {
    flag = true;
}

//main function
(function loop() {
    let flag = false; //initialize the flag wich will let to know us about the reached time
    time(flag);

    if(flag) 
        return;

    var min = 10000; // min 10 seconds
    var max = 20000; // max 20 seconds
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    setTimeout(function() {
        likePost(random);
        loop();  //recursive looping
    }, random);
}());