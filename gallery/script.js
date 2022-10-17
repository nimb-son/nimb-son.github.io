let i = 0;

const image = document.getElementById("imageFrog");

const imgs = new Array('./img/frog1.jpg', './img/frog2.jpg', './img/frog3.jpg', './img/frog4.jpg', './img/frog5.jpg', './img/frog6.jpg');
const l = imgs.length;

function nextFrog(){
    if (i != (l - 1)){
        i++;
        image.src = imgs[i];
    };
        
}    

function previousFrog(){
    if (i > 0){
        i = i - 1;
        image.src = imgs[i];
    ;}  
}

