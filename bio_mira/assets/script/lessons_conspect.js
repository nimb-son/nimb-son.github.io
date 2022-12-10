let i = 0;

const image = document.getElementById("conspect");

const imgs = new Array('./assets/images/lessons/conspect1.jpeg', './assets/images/lessons/conspect2.jpeg', './assets/images/lessons/conspect3.jpeg', './assets/images/lessons/conspect4.jpeg');
const l = imgs.length;

function button_right(){
    if (i != (l - 1)){
        i++;
        image.src = imgs[i];
    };
        
}    

function button_left(){
    if (i > 0){
        i = i - 1;
        image.src = imgs[i];
    };  
}

