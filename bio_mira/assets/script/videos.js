

const video = document.getElementById("video");

const videos = new Array('https://www.youtube.com/embed/s_WiLG19Ec8',
 'https://www.youtube.com/embed/PEIi18B4BXk', 
 'https://www.youtube.com/embed/qSyuTmCGBac', 
 'https://www.youtube.com/embed/EqLoO0lDZIM');
const len = videos.length;

function videobutton_right(){
    if (i != (len - 1)){
        i++;
        video.src = videos[i];
    };
        
}    

function videobutton_left(){
    if (i > 0){
        i = i - 1;
        video.src = videos[i];
    };  
}

