
const image1 = document.getElementById("keys1");
const image2 = document.getElementById("keys2");
const image3 = document.getElementById("keys3");

const images = new Array('./assets/images/otzivy/keys1.JPG', './assets/images/otzivy/keys2.jpg','./assets/images/otzivy/keys3.jpg','./assets/images/otzivy/keys4.jpeg','./assets/images/otzivy/keys5.jpeg','./assets/images/otzivy/keys6.jpg');


function rightClick(){
    if (i != 3){
        i++;
        image1.src = images[i];
        image2.src = images[i+1];
        image3.src = images[i+2];
    };
        
}    

function leftClick(){
    if (i > 1){
        i = i - 1;
        image1.src = images[i-1];
        image2.src = images[i];
        image3.src = images[i+1];
    };  
}

